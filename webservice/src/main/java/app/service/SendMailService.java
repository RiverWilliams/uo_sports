package app.service;

import app.exception.SendMailException;
import app.modele.relation.Inscription;
import app.modele.service.IInscriptionService;
import app.modele.service.IPersonneService;
import app.modele.service.InscriptionService;
import app.template.EmailConfirmationAnnulationInscriptionModeller;
import app.template.EmailConfirmationDemandeInscriptionModeller;
import app.template.EmailConfirmationValidationInscriptionModeller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

@Service
public class SendMailService implements ISendMailService {

    @Autowired
    private MailService mailService;

    @Autowired
    private IInscriptionService inscriptionService;
    @Autowired
    private IPersonneService personneService;

    @Autowired
    private EmailConfirmationAnnulationInscriptionModeller emailConfirmationAnnulationInscriptionModeller;

    @Autowired
    private EmailConfirmationDemandeInscriptionModeller emailConfirmationDemandeInscriptionModeller;

    @Autowired
    private EmailConfirmationValidationInscriptionModeller emailConfirmationValidationInscriptionModeller;

    @Value("${mail.adresse.bcc}")
    private String bcc;

    @Override
    public void emailAnnulationInscription(Inscription inscription) throws SendMailException {
        inscription = inscriptionService.getInscription(inscription);

        Writer writer = new StringWriter();
        try {
            emailConfirmationValidationInscriptionModeller.merge(inscription, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail("Annulation Inscription Sport", writer.toString(), inscription.getPersonne().getEmail(), null);
    }

    @Override
    public void emailConfirmationDemandeInscription(InscriptionService.DemandeInscription demandeInscription) throws SendMailException {
        final InscriptionService.DemandeInscription demande = new InscriptionService.DemandeInscription();
        demande.setPersonne(personneService.findById(demandeInscription.getPersonne().getId()));
        final Inscription[] inscriptions = demandeInscription.getInscriptions();
        demande.setInscriptions(new Inscription[inscriptions.length]);
        for (int i = 0; i < inscriptions.length; i++) {
            demande.getInscriptions()[i] = inscriptionService.getInscription(inscriptions[i]);
        }

        Writer writer = new StringWriter();
        try {
            emailConfirmationDemandeInscriptionModeller.merge(demande, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail("Confirmation Demande Inscription Sport", writer.toString(), demande.getPersonne().getEmail(), bcc);
    }

    @Override
    public void emailConfirmationValidationInscription(Inscription inscription) throws SendMailException {

        inscription = inscriptionService.getInscription(inscription);

        Writer writer = new StringWriter();
        try {
            emailConfirmationValidationInscriptionModeller.merge(inscription, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail("Validation Demande Inscription Sport", writer.toString(), inscription.getPersonne().getEmail(), null);
    }
}
