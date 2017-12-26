package app.modele.entity;

import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class CategoriePersonne {

    public interface Insert extends Default{}

    public interface Update extends Insert {
    }

    @NotNull(groups = {Update.class, Personne.Update.class})
    private Long id;
    private String nom;
    private Float prix;

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

    public Float getPrix() {
        return prix;
    }

    public void setPrix(Float prix) {
        this.prix = prix;
    }
}
