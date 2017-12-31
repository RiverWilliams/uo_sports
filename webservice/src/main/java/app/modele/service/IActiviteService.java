package app.modele.service;

import app.modele.entity.*;

import java.util.List;

public interface IActiviteService extends IServiceEntity<Activite, Long> {

    List<Actualite> getActualites(Long idActivite);

    List<CategorieSport> getCategoriesSports(Long idActivite);

    List<Creneau> getCreneaux(Long idActivite);

    List<Sport> getSports(Long idActivite);
}
