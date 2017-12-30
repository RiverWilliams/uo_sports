package app.modele.entity;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class Lieu {

    @NotNull(groups = {Update.class, Creneau.Insert.class})
    private Long id;
    @NotBlank(groups = Insert.class)
    private String nom;
    @NotBlank(groups = Insert.class)
    private String ville;
    @NotBlank(groups = Insert.class)
    private String adresse;

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
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

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public interface Insert  {
    }

    public interface Update extends Insert {
    }
}
