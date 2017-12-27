package app.modele.dao;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface IActualiteDAO extends IcrudEntity<Actualite, Long> {

    List<Activite> getActivites(Long idActualite);

    List<CategorieSport> getCategoriesSports(Long idActualite);

    List<Sport> getSports(Long idActualite);
}
