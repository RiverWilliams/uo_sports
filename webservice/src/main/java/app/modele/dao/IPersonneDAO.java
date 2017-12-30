package app.modele.dao;

import app.modele.entity.Personne;

public interface IPersonneDAO extends IcrudEntity<Personne, Long> {
    boolean exist(String email);

    Personne findByEmail(String email);
}
