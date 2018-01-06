package app.template;

import app.modele.relation.Inscription;
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
import java.util.Properties;

@Service
public class EmailConfirmationValidationInscriptionModeller extends Modeller {

    @Autowired
    public EmailConfirmationValidationInscriptionModeller(@Qualifier("velocityEngine") VelocityEngine velocityEngine, @Qualifier("templateName") Properties properties) throws Exception {
        super(velocityEngine, properties.getProperty("templates.email.confirmation.validationInscription"));
    }


    public void merge(Inscription inscription, Writer writer) throws ResourceNotFoundException, ParseErrorException, MethodInvocationException, IOException {
        final VelocityContext context = new VelocityContext();
        context.put("inscription", new InscriptionAffichable(inscription));
        context.put("personne", inscription.getPersonne());
        super.merge(context, writer);
    }
}
