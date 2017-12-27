package app.modele.dao;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface ISportDAO extends IcrudEntity<Sport, Long> {
    List<Activite> getActivites(Long idSport);

    List<Actualite> getActualite(Long idSport);

    List<CategorieSport> getCategoriesSports(Long idSport);
}
