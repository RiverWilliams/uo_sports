package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.INiveauDAO;
import app.modele.entity.Niveau;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NiveauService implements INiveauService {
    @Autowired
    private INiveauDAO niveauDAO;


    @Override
    public void deleteById(Long aLong) {
        try {
            niveauDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Niveau> findAll() {
        return niveauDAO.findAll();
    }

    @Override
    public Niveau findById(Long aLong) {
        final Niveau byId = niveauDAO.findById(aLong);
        if (byId==null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public Long insert(Niveau entity) {
        return niveauDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("Le niveau " + id + " n'existe pas.");
    }

    @Override
    public void update(Niveau entity) {
        niveauDAO.update(entity);
    }
}
