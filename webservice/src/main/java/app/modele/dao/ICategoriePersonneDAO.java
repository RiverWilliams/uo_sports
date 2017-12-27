package app.modele.dao;

import app.modele.entity.CategoriePersonne;
import app.modele.entity.PieceInscription;

import java.util.List;

public interface ICategoriePersonneDAO extends IcrudEntity<CategoriePersonne, Long> {
    List<PieceInscription> getPieces(Long idCategorie);
}
