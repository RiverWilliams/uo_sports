package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ILieuDAO;
import app.modele.entity.Lieu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LieuService implements ILieuService {
    @Autowired
    private ILieuDAO lieuDAO;

    @Override
    public void deleteById(Long aLong) {
        try {
            lieuDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Lieu> findAll() {
        return lieuDAO.findAll();
    }

    @Override
    public Lieu findById(Long aLong) {
        final Lieu byId = lieuDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public Long insert(Lieu entity) {
        return lieuDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("Le lieu " + id + " n'existe pas.");

    }

    @Override
    public void update(Lieu entity) {
        lieuDAO.update(entity);
    }
}
