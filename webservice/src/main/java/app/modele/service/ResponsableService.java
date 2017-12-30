package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ICreneauDAO;
import app.modele.dao.IResponsableDAO;
import app.modele.entity.Creneau;
import app.modele.entity.Responsable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsableService implements IResponsableService {
    @Autowired
    private IResponsableDAO responsableDAO;

    @Autowired
    private ICreneauDAO creneauDAO;

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
        final Responsable byId = responsableDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }
    private void checkExist(Long id) {
        if (!responsableDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }
    @Override
    public List<Creneau> getCreneaux(Long id) {
        checkExist(id);
        return creneauDAO.getCreneauxByIdResponsable(id);
    }

    @Override
    public Long insert(Responsable entity) {
        return responsableDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("Le responsable " + id + " n'existe pas.");
    }

    @Override
    public void update(Responsable entity) {
        responsableDAO.update(entity);
    }
}
