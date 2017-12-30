package app.modele.dao;

import app.modele.relation.Inscription;

import java.util.List;

public interface IInscriptionDAO {
    boolean delete(Inscription inscription);

    boolean exist(Inscription inscription);

    List<Inscription> getEnAttentesByIdCreneau(Long id);

    Inscription getInscription(Inscription inscription);

    List<Inscription> getInscriptionsByIdPersonne(Long id);

    List<Inscription> getInscritsByIdCreneau(Long id);

    void insert(Inscription inscription);

    boolean update(Inscription inscription);


}
