package app.template;

import org.apache.velocity.Template;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.context.Context;
import org.apache.velocity.exception.MethodInvocationException;
import org.apache.velocity.exception.ParseErrorException;
import org.apache.velocity.exception.ResourceNotFoundException;

import java.io.IOException;
import java.io.Writer;

public class Modeller {

    public void merge(Context context, Writer writer) throws ResourceNotFoundException, ParseErrorException, MethodInvocationException, IOException {
        template.merge(context, writer);
    }

    private Template template;

    public Modeller(VelocityEngine velocityEngine, String template) throws Exception {
        this.template = velocityEngine.getTemplate(template);
    }


}
