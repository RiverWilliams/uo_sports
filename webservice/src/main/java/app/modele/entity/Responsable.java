package app.modele.entity;

import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class Responsable {

    @NotNull(groups = {Update.class, Creneau.Insert.class})
    private Long id;
    private String nom;
    private String prenom;
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

    public interface Insert extends Default {
    }

    public interface Update extends Insert {
    }
}
