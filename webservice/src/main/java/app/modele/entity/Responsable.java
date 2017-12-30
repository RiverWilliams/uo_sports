package app.modele.entity;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;

public class Responsable {

    @NotNull(groups = {Update.class, Creneau.Insert.class})
    private Long id;
    @NotBlank(groups = Insert.class)
    private String nom;
    @NotBlank(groups = Insert.class)
    private String prenom;
    @Email(groups = Insert.class)
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
