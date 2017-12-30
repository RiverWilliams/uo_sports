package app.modele.dao;

import app.modele.entity.Sport;

import java.util.List;

public interface ISportDAO extends IcrudEntity<Sport, Long> {

    List<Sport> getSportsByIdActivite(Long idActivite);

    List<Sport> getSportsByIdActualite(Long idActualite);

    List<Sport> getSportsByIdCategorieSport(Long idCategorie);


}
