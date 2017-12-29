package app.modele.service;

import app.modele.entity.Creneau;
import app.modele.relation.Inscription;

import java.util.List;

public interface ICreneauService extends IServiceEntity<Creneau, Long> {

    List<Inscription> getEnAttentes(Long id);

    List<Inscription> getInscrits(Long id);

    boolean validerInscription(Inscription inscription);
}
