package app.modele.dao;

import app.modele.entity.PieceInscription;

import java.util.List;

public interface IPieceInscriptionDAO extends IcrudEntity<PieceInscription, Long> {
    List<PieceInscription> getPiecesByIdCategoriePersonne(Long idCategorie);

}
