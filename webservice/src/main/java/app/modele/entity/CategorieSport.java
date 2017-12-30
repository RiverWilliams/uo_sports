package app.modele.entity;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;

public class CategorieSport {

    @NotNull(groups = {Update.class})
    private Long id;
    @NotBlank(groups = Insert.class)
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

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
