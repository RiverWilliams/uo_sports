package app.modele.service;

import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.IAppartientDAO;
import app.modele.dao.ICategorieSportDAO;
import app.modele.dao.ISportDAO;
import app.modele.relation.Appartient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppartientService implements IAppartientService {

    @Autowired
    private ISportDAO sportDAO;

    @Autowired
    private ICategorieSportDAO categorieSportDAO;
    @Autowired
    private IAppartientDAO appartientDAO;

    private boolean checkForeignKey(Appartient appartient) {
        if (!sportDAO.exist(appartient.getIdSport())) {
            throw new ForeignKeyViolationApiException("sport");
        }
        if (!categorieSportDAO.exist(appartient.getIdCategorieSport())) {
            throw new ForeignKeyViolationApiException("categorieSport");
        }
        return true;
    }

    @Override
    public void delete(Appartient relation) {
        appartientDAO.delete(relation);
    }

    @Override
    public void insert(Appartient relation) {
        checkForeignKey(relation);
        appartientDAO.insert(relation);
    }
}
