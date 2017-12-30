package app.modele.entity;

import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import java.sql.Date;

public class Actualite {


    @NotNull(groups = {Update.class})
    private Long id;
    @NotBlank(groups = Insert.class)
    private String titre;
    @NotBlank(groups = Insert.class)
    private String image;
    @NotBlank(groups = Insert.class)
    private String descCourte;
    @NotBlank(groups = Insert.class)
    private String descLongue;
    @NotNull(groups = Insert.class)
    private Date dateDebut;
    @NotNull(groups = Insert.class)
    private Date dateFin;
    private Date dateMiseEnLigne;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public interface Insert {
    }

    public interface Update extends Insert {
    }
}
