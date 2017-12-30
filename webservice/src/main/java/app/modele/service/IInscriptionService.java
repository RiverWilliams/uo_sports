package app.modele.service;

import app.modele.relation.Inscription;

public interface IInscriptionService extends IServiceRelation<Inscription> {

    Long demandeInscriptions(InscriptionService.DemandeInscription demandeInscription);

    void update(Inscription inscription);

    Inscription getInscription(Inscription inscription);

}
