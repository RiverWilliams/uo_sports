package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.IActiviteDAO;
import app.modele.entity.Activite;
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
    public Long insert(Activite entity) {
        return activiteDAO.insert(entity);
    }

    @Override
    public void update(Activite entity) {
        activiteDAO.update(entity);
    }
}
