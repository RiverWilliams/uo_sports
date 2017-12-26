package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.ICategoriePersonneDAO;
import app.modele.dao.IPersonneDAO;
import app.modele.entity.Personne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonneService implements IPersonneService {


    private boolean checkForeignKey(Personne personne) {
        if (!categoriePersonneDAO.exist(personne.getCategoriePersonne().getId())) {
            throw new ForeignKeyViolationApiException("categorie_personne");
        }
        return true;
    }

    @Autowired
    private IPersonneDAO personneDAO;

    @Autowired
    private ICategoriePersonneDAO categoriePersonneDAO;

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
        return personneDAO.findById(aLong);
    }

    @Override
    public Long insert(Personne entity) {
        checkForeignKey(entity);
        return personneDAO.insert(entity);
    }

    @Override
    public void update(Personne entity) {
        checkForeignKey(entity);
        personneDAO.update(entity);
    }
}
