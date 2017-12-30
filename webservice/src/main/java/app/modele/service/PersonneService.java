package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.ForeignKeyViolationApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ICategoriePersonneDAO;
import app.modele.dao.IInscriptionDAO;
import app.modele.dao.IPersonneDAO;
import app.modele.entity.Personne;
import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonneService implements IPersonneService {

    @Autowired
    private IPersonneDAO personneDAO;
    @Autowired
    private ICategoriePersonneDAO categoriePersonneDAO;
    @Autowired
    private IInscriptionDAO inscriptionDAO;

    private void checkExist(Long id) {
        if (!personneDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    private void checkForeignKey(Personne personne) {
        if (!categoriePersonneDAO.exist(personne.getCategoriePersonne().getId())) {
            throw new ForeignKeyViolationApiException("categorie_personne");
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            personneDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Personne> findAll() {
        return personneDAO.findAll();
    }

    @Override
    public Personne findById(Long aLong) {
        final Personne byId = personneDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<Inscription> getInscriptions(Long id) {
        checkExist(id);
        return inscriptionDAO.getInscriptionsByIdPersonne(id);
    }

    @Override
    public Long insert(Personne entity) {
        checkForeignKey(entity);
        return personneDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("La personne " + id + " n'existe pas.");
    }

    @Override
    public void update(Personne entity) {
        checkForeignKey(entity);
        personneDAO.update(entity);
    }
}
