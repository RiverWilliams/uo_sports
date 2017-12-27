package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.IActualiteDAO;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActualiteService implements IActualiteService {

    @Autowired
    private IActualiteDAO actualiteDAO;

    private void checkExist(Long id) {
        if (!actualiteDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            actualiteDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Actualite> findAll() {
        return actualiteDAO.findAll();
    }

    @Override
    public Actualite findById(Long aLong) {
        return actualiteDAO.findById(aLong);
    }

    @Override
    public List<Activite> getActivites(Long idActualite) {
        checkExist(idActualite);
        return actualiteDAO.getActivites(idActualite);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idActualite) {
        checkExist(idActualite);
        return actualiteDAO.getCategoriesSports(idActualite);
    }

    @Override
    public List<Sport> getSports(Long idActualite) {
        checkExist(idActualite);
        return actualiteDAO.getSports(idActualite);
    }

    @Override
    public Long insert(Actualite entity) {
        return actualiteDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("L'actualite " + id + " n'existe pas.");
    }

    @Override
    public void update(Actualite entity) {
        actualiteDAO.update(entity);
    }
}
