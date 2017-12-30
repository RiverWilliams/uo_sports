package app.modele.service;

import app.exception.apiException.ExistApiException;
import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.IActualiteDAO;
import app.modele.dao.IConcerneDAO;
import app.modele.dao.ISportDAO;
import app.modele.relation.Concerne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConcerneService implements IConcerneService {

    @Autowired
    private ISportDAO sportDAO;

    @Autowired
    private IActualiteDAO actualiteDAO;

    @Autowired
    private IConcerneDAO concerneDAO;

    private void checkForeignKey(Concerne concerne) {
        if (!sportDAO.exist(concerne.getIdSport())) {
            throw new ForeignKeyViolationApiException("sport");
        }
        if (!actualiteDAO.exist(concerne.getIdActualite())) {
            throw new ForeignKeyViolationApiException("actualite");
        }
    }

    @Override
    public void delete(Concerne relation) {
        concerneDAO.delete(relation);
    }

    @Override
    public void insert(Concerne relation) {
        checkForeignKey(relation);
        if (concerneDAO.exist(relation)) {
            final String msg = String.format("La relation (idSport,idActualite) (%d,%d) existe déjà.", relation.getIdSport(), relation.getIdActualite());
            throw new ExistApiException(msg);
        }
        concerneDAO.insert(relation);
    }
}
