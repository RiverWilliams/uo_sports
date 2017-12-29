package app.modele.service;

import app.modele.entity.Personne;
import app.modele.relation.Inscription;

import java.util.List;

public interface IPersonneService extends IServiceEntity<Personne, Long> {

    List<Inscription> getInscriptions(Long id);
}
