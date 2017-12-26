package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.ICategorieSportDAO;
import app.modele.entity.CategorieSport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieSportService implements ICategorieSportService {

    @Autowired
    private ICategorieSportDAO categorieSportDAO;

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
    public Long insert(CategorieSport entity) {
        return categorieSportDAO.insert(entity);
    }

    @Override
    public void update(CategorieSport entity) {
        categorieSportDAO.update(entity);
    }
}
