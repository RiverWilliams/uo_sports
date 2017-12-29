package app.modele.relation;

import app.modele.entity.Creneau;
import app.modele.entity.Personne;
import com.fasterxml.jackson.annotation.JsonView;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;

public class Inscription {
    @JsonView(Views.Personne.class)
    @NotNull
    @Valid
    private Personne personne;

    @JsonView(Views.Creneau.class)
    @Valid
    @NotNull
    private Creneau creneau;

    private Boolean enAttente;

    private Boolean demande;

    private Integer ects;

    private Integer nombreHeures;


    public Creneau getCreneau() {
        return creneau;
    }

    public void setCreneau(Creneau creneau) {
        this.creneau = creneau;
    }

    public Boolean getDemande() {
        return demande;
    }

    public void setDemande(Boolean demande) {
        this.demande = demande;
    }

    public Integer getEcts() {
        return ects;
    }

    public void setEcts(Integer ects) {
        this.ects = ects;
    }

    public Boolean getEnAttente() {
        return enAttente;
    }

    public void setEnAttente(Boolean enAttente) {
        this.enAttente = enAttente;
    }

    public Integer getNombreHeures() {
        return nombreHeures;
    }

    public void setNombreHeures(Integer nombreHeures) {
        this.nombreHeures = nombreHeures;
    }

    public Personne getPersonne() {
        return personne;
    }

    public void setPersonne(Personne personne) {
        this.personne = personne;
    }

    public interface Insert extends Default {
    }

    public interface Update extends Insert {
    }

    public interface Views {

        interface Personne {
        }

        interface Creneau {
        }
    }

}
