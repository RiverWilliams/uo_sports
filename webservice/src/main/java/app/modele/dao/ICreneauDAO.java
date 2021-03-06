package app.modele.dao;

import app.modele.entity.Creneau;

import java.util.List;

public interface ICreneauDAO extends IcrudEntity<Creneau, Long> {

    List<Creneau> getCreneauxByIdActivite(Long idActivite);

    List<Creneau> getCreneauxByIdResponsable(Long id);
}
