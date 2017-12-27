package app.modele.service;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface ISportService extends IServiceEntity<Sport, Long> {
    List<Activite> getActivites(Long idSport);

    List<Actualite> getActualites(Long idSport);

    List<CategorieSport> getCategoriesSports(Long idSport);
}
