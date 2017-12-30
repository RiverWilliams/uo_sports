package app.modele.dao;

import app.modele.entity.Actualite;

import java.util.List;

public interface IActualiteDAO extends IcrudEntity<Actualite, Long> {

    List<Actualite> getActualiteByIdSport(Long idSport);

    List<Actualite> getActualitesByIdActivite(Long idActivite);

    List<Actualite> getActualitesByIdCategorieSport(Long idCategorie);


}
