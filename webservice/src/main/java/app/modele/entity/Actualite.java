package app.modele.entity;

import javax.validation.constraints.NotNull;
import javax.validation.groups.Default;
import java.sql.Date;

public class Actualite {


    public interface Insert extends Default {
    }

    public interface Update extends Insert {
    }

    @NotNull(groups = Update.class)
    private Long id;
    private String titre;
    private String image;
    private String descCourte;
    private String descLongue;
    private Date dateDebut;
    private Date dateFin;
    private Date dateMiseEnLigne;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescCourte() {
        return descCourte;
    }

    public void setDescCourte(String descCourte) {
        this.descCourte = descCourte;
    }

    public String getDescLongue() {
        return descLongue;
    }

    public void setDescLongue(String descLongue) {
        this.descLongue = descLongue;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public Date getDateMiseEnLigne() {
        return dateMiseEnLigne;
    }

    public void setDateMiseEnLigne(Date dateMiseEnLigne) {
        this.dateMiseEnLigne = dateMiseEnLigne;
    }
}
