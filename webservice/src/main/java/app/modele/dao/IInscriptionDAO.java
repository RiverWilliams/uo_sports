package app.modele.dao;

import app.modele.relation.Inscription;

public interface IInscriptionDAO {
    void delete(Inscription inscription);
    boolean update(Inscription inscription);
}
