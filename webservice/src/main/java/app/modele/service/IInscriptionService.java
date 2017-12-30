package app.modele.service;

import app.modele.relation.Inscription;

public interface IInscriptionService extends IServiceRelation<Inscription> {

    Long demandeInscriptions(InscriptionService.DemandeInscription demandeInscription);

    Inscription getInscription(Inscription inscription);

    void update(Inscription inscription);

}
