package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.IActiviteDAO;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActiviteService implements IActiviteService {

    @Autowired
    private IActiviteDAO activiteDAO;

    @Override
    public void deleteById(Long aLong) {
        try {
            activiteDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Activite> findAll() {
        return activiteDAO.findAll();
    }

    @Override
    public Activite findById(Long aLong) {
        return activiteDAO.findById(aLong);
    }

    @Override
    public List<Actualite> getActualites(Long idActivite) {
        return activiteDAO.getActualites(idActivite);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idActivite) {
        return activiteDAO.getCategoriesSports(idActivite);
    }

    @Override
    public List<Sport> getSports(Long idActivite) {
        return activiteDAO.getSports(idActivite);
    }

    @Override
    public Long insert(Activite entity) {
        return activiteDAO.insert(entity);
    }

    @Override
    public void update(Activite entity) {
        activiteDAO.update(entity);
    }
}
