package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ICategoriePersonneDAO;
import app.modele.entity.CategoriePersonne;
import app.modele.entity.PieceInscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriePersonneService implements ICategoriePersonneService {
    @Autowired
    private ICategoriePersonneDAO categoriePersonneDAO;

    private void checkExist(Long id) {
        if (!categoriePersonneDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            categoriePersonneDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<CategoriePersonne> findAll() {
        return categoriePersonneDAO.findAll();
    }

    @Override
    public CategoriePersonne findById(Long aLong) {
        final CategoriePersonne byId = categoriePersonneDAO.findById(aLong);
        if (byId==null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<PieceInscription> getPieces(Long idCategorie) {
        checkExist(idCategorie);
        return categoriePersonneDAO.getPieces(idCategorie);
    }

    @Override
    public Long insert(CategoriePersonne entity) {
        return categoriePersonneDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("La categorie de personne " + id + " n'existe pas.");
    }

    @Override
    public void update(CategoriePersonne entity) {
        categoriePersonneDAO.update(entity);
    }
}
