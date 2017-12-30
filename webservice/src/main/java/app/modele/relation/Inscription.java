package app.modele.relation;

import app.modele.entity.Creneau;
import app.modele.entity.Personne;
import app.modele.service.InscriptionService;
import com.fasterxml.jackson.annotation.JsonView;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

public class Inscription {

    @JsonView(Views.Personne.class)
    @Valid
    @NotNull(groups = {Insert.class, Delete.class})
    private Personne personne;

    @JsonView(Views.Creneau.class)
    @Valid
    @NotNull(groups = {Insert.class, InscriptionService.DemandeInscription.Insert.class, Delete.class})
    private Creneau creneau;

    @NotNull(groups = Update.class)
    private Boolean enAttente;
    @NotNull
    private Boolean demande;
    @NotNull(groups = Update.class)
    private Integer ects;
    @NotNull(groups = Update.class)
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

    public interface Insert {
    }

    public interface Update extends Insert {
    }

    public interface Views {

        interface Personne {
        }

        interface Creneau {
        }
    }

    public interface Delete {
    }
    
}
