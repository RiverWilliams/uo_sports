package app.modele.service;

import app.exception.apiException.ForeignKeyViolationApiException;
import app.modele.dao.ICategoriePersonneDAO;
import app.modele.dao.IDemandeDAO;
import app.modele.dao.IPieceInscriptionDAO;
import app.modele.relation.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemandeService implements IDemandeService {

    @Autowired
    private ICategoriePersonneDAO categoriePersonneDAO;

    @Autowired
    private IPieceInscriptionDAO pieceInscriptionDAO;

    @Autowired
    private IDemandeDAO demandeDAO;

    private boolean checkForeignKey(Demande demande) {
        if (!categoriePersonneDAO.exist(demande.getIdCategoriePersonne())) {
            throw new ForeignKeyViolationApiException("categoriePersonne");
        }
        if (!pieceInscriptionDAO.exist(demande.getIdPieceInscription())) {
            throw new ForeignKeyViolationApiException("pieceInscription");
        }
        return true;
    }

    @Override
    public void delete(Demande relation) {
        demandeDAO.delete(relation);
    }

    @Override
    public void insert(Demande relation) {
        checkForeignKey(relation);
        demandeDAO.insert(relation);
    }
}
