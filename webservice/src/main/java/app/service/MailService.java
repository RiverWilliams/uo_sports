package app.service;

import app.exception.SendMailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
class MailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${mail.adresse.from}")
    private String from;

    public void sendMail(String subject, String text, String to, String bcc) throws SendMailException {
        final MimeMessage message = mailSender.createMimeMessage();
        try {
            final MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setSubject(subject);
            helper.setText(text, true);
            helper.setTo(to);
            helper.setFrom(from);
            if (bcc != null && !bcc.isEmpty())
                helper.setBcc(bcc);
            mailSender.send(message);
        } catch (Exception e) {
            throw new SendMailException("L'envoye de l'email a echoué.", e);
        }
    }

}
