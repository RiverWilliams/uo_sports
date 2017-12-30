package app.modele.dao;

import app.modele.entity.CategorieSport;

import java.util.List;

public interface ICategorieSportDAO extends IcrudEntity<CategorieSport, Long> {
    List<CategorieSport> getCategoriesSportsByIdActivite(Long idActivite);

    List<CategorieSport> getCategoriesSportsByIdActualite(Long idActualite);

    List<CategorieSport> getCategoriesSportsByIdSport(Long idSport);


}
