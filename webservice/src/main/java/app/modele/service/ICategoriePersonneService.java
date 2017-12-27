package app.modele.service;

import app.modele.entity.CategoriePersonne;
import app.modele.entity.PieceInscription;

import java.util.List;

public interface ICategoriePersonneService extends IServiceEntity<CategoriePersonne, Long> {
    List<PieceInscription> getPieces(Long idCategorie);
}
