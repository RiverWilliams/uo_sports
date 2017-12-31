package app.template;

import app.modele.entity.PieceInscription;
import app.modele.service.InscriptionService;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.exception.MethodInvocationException;
import org.apache.velocity.exception.ParseErrorException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Writer;
import java.util.List;
import java.util.Properties;

@Service
public class EmailConfirmationDemandeInscriptionModeller extends Modeller {

    @Autowired
    public EmailConfirmationDemandeInscriptionModeller(@Qualifier("velocityEngine") VelocityEngine velocityEngine, @Qualifier("templateName") Properties properties) throws Exception {
        super(velocityEngine, properties.getProperty("templates.email.confirmation.demandeInscription"));
    }


    public void merge(InscriptionService.DemandeInscription demandeInscription, List<PieceInscription> pieceInscriptions, Writer writer) throws ResourceNotFoundException, ParseErrorException, MethodInvocationException, IOException {
        final VelocityContext context = new VelocityContext();
        context.put("demandeInscription", demandeInscription);
        context.put("inscriptions", demandeInscription.getInscriptions());
        context.put("personne", demandeInscription.getPersonne());
        context.put("pieceInscriptions", pieceInscriptions);
        super.merge(context, writer);
    }
}
