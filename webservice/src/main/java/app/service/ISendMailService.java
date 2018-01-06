package app.service;

import app.exception.SendMailException;
import app.modele.relation.Inscription;
import app.modele.service.InscriptionService;

public interface ISendMailService {

    void emailConfirmationDemandeInscription(InscriptionService.DemandeInscription demandeInscription) throws SendMailException;

    void emailConfirmationValidationInscription(Inscription inscription) throws SendMailException;

    void emailGestionInscription(InscriptionService.DemandeInscription demandeInscription) throws SendMailException;

}
