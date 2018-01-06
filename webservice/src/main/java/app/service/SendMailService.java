package app.service;

import app.exception.SendMailException;
import app.modele.entity.PieceInscription;
import app.modele.relation.Inscription;
import app.modele.service.ICategoriePersonneService;
import app.modele.service.IInscriptionService;
import app.modele.service.IPersonneService;
import app.modele.service.InscriptionService;
import app.template.EmailConfirmationDemandeInscriptionModeller;
import app.template.EmailConfirmationValidationInscriptionModeller;
import app.template.EmailGestionInscriptionModeller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.List;

@Service
public class SendMailService implements ISendMailService {

    @Autowired
    private MailService mailService;

    @Autowired
    private ICategoriePersonneService categoriePersonneService;

    @Autowired
    private IInscriptionService inscriptionService;
    @Autowired
    private IPersonneService personneService;

    @Autowired
    private EmailGestionInscriptionModeller emailGestionInscriptionModeller;

    @Autowired
    private EmailConfirmationDemandeInscriptionModeller emailConfirmationDemandeInscriptionModeller;

    @Autowired
    private EmailConfirmationValidationInscriptionModeller emailConfirmationValidationInscriptionModeller;

    @Value("${mail.adresse.gestion}")
    private String emailGestion;

    @Value("${mail.sujet.gestion}")
    private String sujetGestion;

    @Value("${mail.sujet.demandeInscription}")
    private String sujetDemandeInscription;

    @Value("${mail.sujet.validationInscription}")
    private String sujetValidationInscription;

    @Override
    public void emailConfirmationDemandeInscription(InscriptionService.DemandeInscription demandeInscription) throws SendMailException {
        final InscriptionService.DemandeInscription demande = new InscriptionService.DemandeInscription();
        demande.setPersonne(personneService.findById(demandeInscription.getPersonne().getId()));
        final Inscription[] inscriptions = demandeInscription.getInscriptions();
        demande.setInscriptions(new Inscription[inscriptions.length]);
        for (int i = 0; i < inscriptions.length; i++) {
            demande.getInscriptions()[i] = inscriptionService.getInscription(inscriptions[i]);
        }

        final List<PieceInscription> pieceInscriptions = categoriePersonneService.getPieces(demandeInscription.getPersonne().getCategoriePersonne().getId());

        Writer writer = new StringWriter();
        try {
            emailConfirmationDemandeInscriptionModeller.merge(demande, pieceInscriptions, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail(sujetDemandeInscription, writer.toString(), demande.getPersonne().getEmail(), null);
    }

    @Override
    public void emailConfirmationValidationInscription(Inscription inscription) throws SendMailException {

        inscription = inscriptionService.getInscription(inscription);
        final List<PieceInscription> pieceInscriptions = categoriePersonneService.getPieces(inscription.getPersonne().getCategoriePersonne().getId());
        Writer writer = new StringWriter();
        try {
            emailConfirmationValidationInscriptionModeller.merge(inscription, pieceInscriptions, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail(sujetValidationInscription, writer.toString(), inscription.getPersonne().getEmail(), null);
    }

    @Override
    public void emailGestionInscription(InscriptionService.DemandeInscription demandeInscription) throws SendMailException {
        final InscriptionService.DemandeInscription demande = new InscriptionService.DemandeInscription();
        demande.setPersonne(personneService.findById(demandeInscription.getPersonne().getId()));
        final Inscription[] inscriptions = demandeInscription.getInscriptions();
        demande.setInscriptions(new Inscription[inscriptions.length]);
        for (int i = 0; i < inscriptions.length; i++) {
            demande.getInscriptions()[i] = inscriptionService.getInscription(inscriptions[i]);
        }

        final List<PieceInscription> pieceInscriptions = categoriePersonneService.getPieces(demandeInscription.getPersonne().getCategoriePersonne().getId());

        Writer writer = new StringWriter();
        try {
            emailGestionInscriptionModeller.merge(demande, pieceInscriptions, writer);
        } catch (IOException e) {
            throw new SendMailException("Le template n'as pas pu être chargé.", e);
        }

        mailService.sendMail(sujetGestion, writer.toString(), emailGestion, null);
    }
}
