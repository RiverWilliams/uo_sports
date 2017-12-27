package app.modele.dao;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;

import java.util.List;

public interface ICategorieSportDAO extends IcrudEntity<CategorieSport, Long> {
    List<Activite> getActivites(Long idCategorie);

    List<Actualite> getActualites(Long idCategorie);

    List<Sport> getSports(Long idCategorie);
}
