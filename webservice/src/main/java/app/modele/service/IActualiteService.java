package app.modele.service;

import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface IActualiteService extends IServiceEntity<Actualite, Long> {

    List<CategorieSport> getCategoriesSports(Long idActualite);

    List<Sport> getSports(Long idActualite);

}
