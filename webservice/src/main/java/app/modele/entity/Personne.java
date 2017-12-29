package app.modele.entity;

import app.modele.relation.Inscription;
import org.hibernate.validator.constraints.Email;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class Personne {

    @NotNull(groups = {Update.class, Inscription.Update.class})
    private Long id;
    private String nom;
    private String prenom;
    private String adresse;
    private String telephone;
    @NotNull
    @Email
    private String email;
    @Valid
    @NotNull
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

    public interface Insert extends Default {
    }

    public interface Update extends Insert {
    }
}
