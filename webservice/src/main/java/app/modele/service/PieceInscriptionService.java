package app.modele.service;

import app.exception.DeleteChildBeforeParentException;
import app.exception.apiException.DeleteChildBeforeParentApiException;
import app.exception.apiException.NotFoundApiException;
import app.modele.dao.IPieceInscriptionDAO;
import app.modele.entity.PieceInscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PieceInscriptionService implements IPieceInscriptionService {
    @Autowired
    private IPieceInscriptionDAO pieceInscriptionDAO;

    @Override
    public void deleteById(Long aLong) {
        try {
            pieceInscriptionDAO.deleteById(aLong);
        } catch (DeleteChildBeforeParentException e) {
            throw new DeleteChildBeforeParentApiException();
        }
    }

    @Override
    public List<PieceInscription> findAll() {
        return pieceInscriptionDAO.findAll();
    }

    @Override
    public PieceInscription findById(Long aLong) {
        return pieceInscriptionDAO.findById(aLong);
    }

    @Override
    public Long insert(PieceInscription entity) {
        return pieceInscriptionDAO.insert(entity);
    }

    private void throwNotFoundApiException(long id) {
        throw new NotFoundApiException("La piece " + id + " n'existe pas.");
    }

    @Override
    public void update(PieceInscription entity) {
        pieceInscriptionDAO.update(entity);
    }
}
