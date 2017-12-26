package app.template;

import app.modele.entity.Activite;
import app.modele.entity.Personne;
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
public class EmailConfirmationModeller extends Modeller {

    @Autowired
    public EmailConfirmationModeller(@Qualifier("velocityEngine") VelocityEngine velocityEngine, @Qualifier("templateName") Properties properties) throws Exception {
        super(velocityEngine, properties.getProperty("templates.email.confirmation"));
    }


    public void merge(Personne adherent, Activite activites[], Writer writer) throws ResourceNotFoundException, ParseErrorException, MethodInvocationException, IOException {
        final VelocityContext context = new VelocityContext();
        context.put("adherent", adherent);
        context.put("activites", activites);
        super.merge(context, writer);
    }
}
