package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ICategorieSportDAO;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieSportService implements ICategorieSportService {

    @Autowired
    private ICategorieSportDAO categorieSportDAO;

    private void checkExist(Long id) {
        if (!categorieSportDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            categorieSportDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<CategorieSport> findAll() {
        return categorieSportDAO.findAll();
    }

    @Override
    public CategorieSport findById(Long aLong) {
        return categorieSportDAO.findById(aLong);
    }

    @Override
    public List<Activite> getActivites(Long idCategorie) {
        checkExist(idCategorie);
        return categorieSportDAO.getActivites(idCategorie);
    }

    @Override
    public List<Actualite> getActualites(Long idCategorie) {
        checkExist(idCategorie);

        return categorieSportDAO.getActualites(idCategorie);
    }

    @Override
    public List<Sport> getSports(Long idCategorie) {

        checkExist(idCategorie);
        return categorieSportDAO.getSports(idCategorie);
    }

    @Override
    public Long insert(CategorieSport entity) {
        return categorieSportDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("La categorie de sport " + id + " n'existe pas.");
    }

    @Override
    public void update(CategorieSport entity) {
        categorieSportDAO.update(entity);
    }
}
