package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.ForeignKeyViolationApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.*;
import app.modele.entity.Creneau;
import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreneauService implements ICreneauService {
    @Autowired
    private ICreneauDAO creneauDAO;
    @Autowired
    private ILieuDAO lieuDAO;
    @Autowired
    private IResponsableDAO responsableDAO;
    @Autowired
    private IActiviteDAO activiteDAO;
    @Autowired
    private IInscriptionDAO inscriptionDAO;

    private void checkExist(Long id) {
        if (!creneauDAO.exist(id)) {
            throwNotFoundApiException(id);
        }
    }

    private void checkForeignKey(Creneau creneau) {
        if (!lieuDAO.exist(creneau.getLieu().getId())) {
            throw new ForeignKeyViolationApiException("lieu");
        }
        if (!activiteDAO.exist(creneau.getActivite().getId())) {
            throw new ForeignKeyViolationApiException("activite");
        }
        if (!responsableDAO.exist(creneau.getResponsable().getId())) {
            throw new ForeignKeyViolationApiException("responsable");
        }
    }

    @Override
    public void deleteById(Long aLong) {
        try {
            creneauDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<Creneau> findAll() {
        return creneauDAO.findAll();
    }

    @Override
    public Creneau findById(Long aLong) {
        final Creneau byId = creneauDAO.findById(aLong);
        if (byId == null)
            throwNotFoundApiException(aLong);
        return byId;
    }

    @Override
    public List<Inscription> getEnAttentes(Long id) {
        checkExist(id);
        return inscriptionDAO.getEnAttentesByIdCreneau(id);
    }

    @Override
    public List<Inscription> getInscrits(Long id) {
        checkExist(id);
        return inscriptionDAO.getInscritsByIdCreneau(id);
    }

    @Override
    public Long insert(Creneau entity) {
        checkForeignKey(entity);
        return creneauDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("Le creneau " + id + " n'existe pas.");
    }

    @Override
    public void update(Creneau entity) {
        checkForeignKey(entity);
        creneauDAO.update(entity);
    }


}
