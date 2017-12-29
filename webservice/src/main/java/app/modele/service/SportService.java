package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.ISportDAO;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportService implements ISportService {

    @Autowired
    private ISportDAO sportDAO;

    private void checkExist(Long id) {
        if (!sportDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            sportDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Sport> findAll() {
        return sportDAO.findAll();
    }

    @Override
    public Sport findById(Long aLong) {
        final Sport byId = sportDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<Activite> getActivites(Long idSport) {
        checkExist(idSport);
        return sportDAO.getActivites(idSport);
    }

    @Override
    public List<Actualite> getActualites(Long idSport) {
        checkExist(idSport);

        return sportDAO.getActualite(idSport);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idSport) {
        checkExist(idSport);
        return sportDAO.getCategoriesSports(idSport);
    }

    @Override
    public Long insert(Sport entity) {
        return sportDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("Le sport " + id + " n'existe pas.");
    }

    @Override
    public void update(Sport entity) {
        sportDAO.update(entity);
    }
}
