package app.modele.dao;

import app.modele.entity.Creneau;
import app.modele.relation.Inscription;

import java.util.List;

public interface ICreneauDAO extends IcrudEntity<Creneau, Long> {
    List<Inscription> getEnAttentes(Long id);

    List<Inscription> getInscrits(Long id);
}
