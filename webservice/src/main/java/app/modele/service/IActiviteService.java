package app.modele.service;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface IActiviteService extends IServiceEntity<Activite, Long> {

    List<Actualite> getActualites(Long idActivite);

    List<CategorieSport> getCategoriesSports(Long idActivite);

    List<Sport> getSports(Long idActivite);
}
