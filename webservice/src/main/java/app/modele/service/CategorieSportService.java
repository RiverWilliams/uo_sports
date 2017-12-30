package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.IActiviteDAO;
import app.modele.dao.IActualiteDAO;
import app.modele.dao.ICategorieSportDAO;
import app.modele.dao.ISportDAO;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieSportService implements ICategorieSportService {

    @Autowired
    private ICategorieSportDAO categorieSportDAO;
    @Autowired
    private ISportDAO sportDAO;
    @Autowired
    private IActiviteDAO activiteDAO;
    @Autowired
    private IActualiteDAO actualiteDAO;

    private void checkExist(Long id) {
        if (!categorieSportDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

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
        final CategorieSport byId = categorieSportDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<Activite> getActivites(Long idCategorie) {
        checkExist(idCategorie);
        return activiteDAO.getActivitesByIdCategorieSport(idCategorie);
    }

    @Override
    public List<Actualite> getActualites(Long idCategorie) {
        checkExist(idCategorie);

        return actualiteDAO.getActualitesByIdCategorieSport(idCategorie);
    }

    @Override
    public List<Sport> getSports(Long idCategorie) {

        checkExist(idCategorie);
        return sportDAO.getSportsByIdCategorieSport(idCategorie);
    }

    @Override
    public Long insert(CategorieSport entity) {
        return categorieSportDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("La categorie de sport " + id + " n'existe pas.");
    }

    @Override
    public void update(CategorieSport entity) {
        categorieSportDAO.update(entity);
    }
}
