package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.IResponsableDAO;
import app.modele.entity.Responsable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsableService implements IResponsableService {

    @Autowired
    private IResponsableDAO responsableDAO;

    @Override
    public void deleteById(Long aLong) {
        try {
            responsableDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Responsable> findAll() {
        return responsableDAO.findAll();
    }

    @Override
    public Responsable findById(Long aLong) {
        return responsableDAO.findById(aLong);
    }

    @Override
    public Long insert(Responsable entity) {
        return responsableDAO.insert(entity);
    }

    @Override
    public void update(Responsable entity) {
        responsableDAO.update(entity);
    }
}
