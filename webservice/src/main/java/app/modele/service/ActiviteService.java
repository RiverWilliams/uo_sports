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
public class ActiviteService implements IActiviteService {

    @Autowired
    private IActiviteDAO activiteDAO;

    @Autowired
    private IActualiteDAO actualiteDAO;

    @Autowired
    private ISportDAO sportDAO;

    @Autowired
    private ICategorieSportDAO categorieSportDAO;

    private void checkExist(Long id) {
        if (!activiteDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

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
        final Activite byId = activiteDAO.findById(aLong);
        if (byId == null) {
            throwNotFoundApiException(aLong);
        }
        return byId;
    }

    @Override
    public List<Actualite> getActualites(Long idActivite) {
        checkExist(idActivite);

        return actualiteDAO.getActualitesByIdActivite(idActivite);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idActivite) {
        checkExist(idActivite);
        return categorieSportDAO.getCategoriesSportsByIdActivite(idActivite);
    }

    @Override
    public List<Sport> getSports(Long idActivite) {
        checkExist(idActivite);
        return sportDAO.getSportsByIdActivite(idActivite);
    }

    @Override
    public Long insert(Activite entity) {
        return activiteDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("L'activite " + id + " n'existe pas.");
    }

    @Override
    public void update(Activite entity) {
        activiteDAO.update(entity);
    }
}
