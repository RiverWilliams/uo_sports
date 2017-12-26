package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
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
        return lieuDAO.findById(aLong);
    }

    @Override
    public Long insert(Lieu entity) {
        return lieuDAO.insert(entity);
    }

    @Override
    public void update(Lieu entity) {
        lieuDAO.update(entity);
    }
}
