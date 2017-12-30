package app.configuration;

import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;
import java.util.Properties;

@Configuration
public class VelocityConfig {

    @Bean
    @Scope("singleton")
    public Properties templateName(@Value("${templates.properties.name}") String propertiesTemplate) throws Exception {
        final ClassPathResource classPathResource = new ClassPathResource(propertiesTemplate);
        final InputStream inputStream = classPathResource.getInputStream();
        Properties properties = new Properties();
        properties.load(inputStream);
        return properties;
    }

    @Bean
    @Scope("singleton")
    public VelocityEngine velocityEngine(@Value("${velocity.properties.name}") String propertiesVelocity) throws Exception {
        final ClassPathResource classPathResource = new ClassPathResource(propertiesVelocity);
        final String filename = classPathResource.getFile().getCanonicalPath();
        return new VelocityEngine(filename);
    }
}
