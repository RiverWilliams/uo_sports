package app.modele.service;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface ICategorieSportService extends IServiceEntity<CategorieSport, Long> {

    List<Activite> getActivites(Long idCategorie);

    List<Actualite> getActualites(Long idCategorie);

    List<Sport> getSports(Long idCategorie);
}
