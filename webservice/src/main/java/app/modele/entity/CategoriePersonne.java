package app.modele.entity;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class CategoriePersonne {

    @NotNull(groups = {Update.class, Personne.Insert.class})
    private Long id;
    @NotBlank(groups = Insert.class)
    private String nom;
    @NotNull(groups = Insert.class)
    @Min(groups = Insert.class, value = 0)
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

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
