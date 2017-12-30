package app.modele.entity;

import app.modele.relation.Inscription;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class Personne {

    @NotNull(groups = {Update.class, Inscription.Update.class, Inscription.Delete.class})
    private Long id;
    @NotBlank(groups = Insert.class)
    private String nom;
    @NotBlank(groups = Insert.class)
    private String prenom;
    @NotBlank(groups = Insert.class)
    private String adresse;
    @NotNull(groups = Insert.class)
    @Pattern(regexp = "(\\+[0-9]{0,3})?[0-9]{10}")
    private String telephone;
    @NotNull(groups = Insert.class)
    @Email(groups = Insert.class)
    private String email;
    @Valid
    @NotNull(groups = Insert.class)
    private CategoriePersonne categoriePersonne;

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public CategoriePersonne getCategoriePersonne() {
        return categoriePersonne;
    }

    public void setCategoriePersonne(CategoriePersonne categoriePersonne) {
        this.categoriePersonne = categoriePersonne;
    }

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

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
