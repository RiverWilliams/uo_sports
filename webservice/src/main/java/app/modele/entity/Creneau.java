package app.modele.entity;

import app.modele.relation.Inscription;
import app.modele.service.InscriptionService;
import org.hibernate.validator.constraints.Range;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.sql.Time;

public class Creneau {

    @NotNull(groups = {Update.class, InscriptionService.DemandeInscription.Insert.class, Inscription.Update.class, Inscription.Delete.class})
    private Long id;
    @NotNull(groups = Insert.class)
    private Time heureDebut;
    @NotNull(groups = Insert.class)
    private Time heureFin;
    @NotNull(groups = Insert.class)
    @Min(groups = Insert.class, value = 1)
    private Integer effectif;
    @NotNull
    @Range(groups = Insert.class, min = 0, max = 6)
    private Integer jour;
    @Valid
    @NotNull(groups = {Insert.class})
    private Niveau niveau;
    @Valid
    @NotNull(groups = Insert.class)
    private Lieu lieu;
    @Valid
    @NotNull(groups = {Insert.class})
    private Responsable responsable;
    @Valid
    @NotNull(groups = {Insert.class})
    private Activite activite;

    public Activite getActivite() {
        return activite;
    }

    public void setActivite(Activite activite) {
        this.activite = activite;
    }

    public Integer getEffectif() {
        return effectif;
    }

    public void setEffectif(Integer effectif) {
        this.effectif = effectif;
    }

    public Time getHeureDebut() {
        return heureDebut;
    }

    public void setHeureDebut(Time heureDebut) {
        this.heureDebut = heureDebut;
    }

    public Time getHeureFin() {
        return heureFin;
    }

    public void setHeureFin(Time heureFin) {
        this.heureFin = heureFin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getJour() {
        return jour;
    }

    public void setJour(Integer jour) {
        this.jour = jour;
    }

    public Lieu getLieu() {
        return lieu;
    }

    public void setLieu(Lieu lieu) {
        this.lieu = lieu;
    }

    public Niveau getNiveau() {
        return niveau;
    }

    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }

    public Responsable getResponsable() {
        return responsable;
    }

    public void setResponsable(Responsable responsable) {
        this.responsable = responsable;
    }

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
