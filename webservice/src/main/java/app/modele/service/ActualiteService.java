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

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

@Service
public class ActualiteService implements IActualiteService {

    @Autowired
    private IActualiteDAO actualiteDAO;
    @Autowired
    private IActiviteDAO activiteDAO;
    @Autowired
    private ICategorieSportDAO categorieSportDAO;
    @Autowired
    private ISportDAO sportDAO;

    private void checkExist(Long id) {
        if (!actualiteDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            actualiteDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Actualite> findAll() {
        return actualiteDAO.findAll();
    }

    @Override
    public Actualite findById(Long aLong) {
        final Actualite byId = actualiteDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<Activite> getActivites(Long idActualite) {
        checkExist(idActualite);
        return activiteDAO.getActivitesByIdActualite(idActualite);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idActualite) {
        checkExist(idActualite);
        return categorieSportDAO.getCategoriesSportsByIdActualite(idActualite);
    }

    @Override
    public List<Sport> getSports(Long idActualite) {
        checkExist(idActualite);
        return sportDAO.getSportsByIdActualite(idActualite);
    }

    @Override
    public Long insert(Actualite entity) {
        entity.setDateMiseEnLigne(new Date(Calendar.getInstance().getTimeInMillis()));
        return actualiteDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("L'actualite " + id + " n'existe pas.");
    }

    @Override
    public void update(Actualite entity) {
        actualiteDAO.update(entity);
    }
}
