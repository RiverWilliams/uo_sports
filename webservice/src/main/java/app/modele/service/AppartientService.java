package app.modele.service;

import app.exception.apiException.ExistApiException;
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

    private void checkForeignKey(Appartient appartient) {
        if (!sportDAO.exist(appartient.getIdSport())) {
            throw new ForeignKeyViolationApiException("sport");
        }
        if (!categorieSportDAO.exist(appartient.getIdCategorieSport())) {
            throw new ForeignKeyViolationApiException("categorieSport");
        }
    }

    @Override
    public void delete(Appartient relation) {
        appartientDAO.delete(relation);
    }

    @Override
    public void insert(Appartient relation) {
        checkForeignKey(relation);
        if(appartientDAO.exist(relation)){
            final String msg = String.format("La relation (idSport,idCategorieSport) (%d,%d) existe déjà.", relation.getIdSport(),relation.getIdCategorieSport());
            throw new ExistApiException(msg);
        }
        appartientDAO.insert(relation);
    }
}
