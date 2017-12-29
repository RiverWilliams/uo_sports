package app.modele.dao;

import app.modele.entity.Personne;
import app.modele.relation.Inscription;

import java.util.List;

public interface IPersonneDAO extends IcrudEntity<Personne, Long> {
    List<Inscription> getInscriptions(Long id);
}
