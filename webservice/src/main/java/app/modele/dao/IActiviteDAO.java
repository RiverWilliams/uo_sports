package app.modele.dao;

import app.modele.entity.Activite;

import java.util.List;

public interface IActiviteDAO extends IcrudEntity<Activite, Long> {

    List<Activite> getActivitesByIdActualite(Long idActualite);

    List<Activite> getActivitesByIdCategorieSport(Long idCategorie);

    List<Activite> getActivitesByIdSport(Long idSport);

}
