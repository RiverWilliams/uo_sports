package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.modele.dao.ICategoriePersonneDAO;
import app.modele.entity.CategoriePersonne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriePersonneService implements ICategoriePersonneService {

    @Autowired
    private ICategoriePersonneDAO categoriePersonneDAO;

    @Override
    public void deleteById(Long aLong) {
        try {
            categoriePersonneDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<CategoriePersonne> findAll() {
        return categoriePersonneDAO.findAll();
    }

    @Override
    public CategoriePersonne findById(Long aLong) {
        return categoriePersonneDAO.findById(aLong);
    }

    @Override
    public Long insert(CategoriePersonne entity) {
        return categoriePersonneDAO.insert(entity);
    }

    @Override
    public void update(CategoriePersonne entity) {
        categoriePersonneDAO.update(entity);
    }
}
