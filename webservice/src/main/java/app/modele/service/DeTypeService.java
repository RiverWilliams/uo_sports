package app.modele.service;

import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.IActiviteDAO;
import app.modele.dao.IDeTypeDAO;
import app.modele.dao.ISportDAO;
import app.modele.relation.DeType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeTypeService implements IDeTypeService {

    @Autowired
    private ISportDAO sportDAO;

    @Autowired
    private IActiviteDAO activiteDAO;

    @Autowired
    private IDeTypeDAO deTypeDAO;

    private boolean checkForeignKey(DeType deType) {
        if (!sportDAO.exist(deType.getIdSport())) {
            throw new ForeignKeyViolationApiException("sport");
        }
        if (!activiteDAO.exist(deType.getIdActivite())) {
            throw new ForeignKeyViolationApiException("activite");
        }
        return true;
    }

    @Override
    public void delete(DeType relation) {
        deTypeDAO.delete(relation);
    }

    @Override
    public void insert(DeType relation) {
        checkForeignKey(relation);
        deTypeDAO.insert(relation);
    }
}
