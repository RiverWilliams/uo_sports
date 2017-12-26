package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.IActiviteDAO;
import app.modele.dao.ICreneauDAO;
import app.modele.dao.ILieuDAO;
import app.modele.dao.IResponsableDAO;
import app.modele.entity.Creneau;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreneauService implements ICreneauService {

    private boolean checkForeignKey(Creneau creneau) {
        if (!lieuDAO.exist(creneau.getLieu().getId())) {
            throw new ForeignKeyViolationApiException("lieu");
        }
        if (!activiteDAO.exist(creneau.getActivite().getId())) {
            throw new ForeignKeyViolationApiException("activite");
        }
        if (!responsableDAO.exist(creneau.getResponsable().getId())) {
            throw new ForeignKeyViolationApiException("responsable");
        }
        return true;
    }

    @Autowired
    private ICreneauDAO creneauDAO;

    @Autowired
    private ILieuDAO lieuDAO;

    @Autowired
    private IResponsableDAO responsableDAO;

    @Autowired
    private IActiviteDAO activiteDAO;

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
        return creneauDAO.findById(aLong);
    }

    @Override
    public Long insert(Creneau entity) {
        checkForeignKey(entity);
        return creneauDAO.insert(entity);
    }

    @Override
    public void update(Creneau entity) {
        checkForeignKey(entity);
        creneauDAO.update(entity);
    }
}
