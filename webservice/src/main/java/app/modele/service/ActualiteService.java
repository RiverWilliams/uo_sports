package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.IActualiteDAO;
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
    public List<CategorieSport> getCategoriesSports(Long idActualite) {
        return actualiteDAO.getCategoriesSports(idActualite);
    }

    @Override
    public List<Sport> getSports(Long idActualite) {
        return actualiteDAO.getSports(idActualite);
    }

    @Override
    public Long insert(Actualite entity) {
        return actualiteDAO.insert(entity);
    }

    @Override
    public void update(Actualite entity) {
        actualiteDAO.update(entity);
    }
}
