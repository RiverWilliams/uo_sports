package app.modele.entity;

import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class Niveau {

    public interface Insert extends Default{}

    public interface Update extends Insert {
    }

    @NotNull(groups = {Update.class, Creneau.Insert.class})
    private Long id;
    private String nom;

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
}
