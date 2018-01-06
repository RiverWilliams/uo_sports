package app.template;

import app.modele.entity.*;

public class CreneauAffichable {
    private Creneau creneau;

    public CreneauAffichable(Creneau creneau) {
        this.creneau = creneau;
    }

    public Activite getActivite() {
        return creneau.getActivite();
    }

    public Integer getEffectif() {
        return creneau.getEffectif();
    }

    public String getHeureDebut() {
        return String.format("%tR", creneau.getHeureDebut().toLocalTime());
    }

    public String getHeureFin() {
        return String.format("%tR", creneau.getHeureFin().toLocalTime());
    }

    public String getJour() {
        switch (creneau.getJour()) {
            case 0:
                return "lundi";
            case 1:
                return "mardi";
            case 2:
                return "mercredi";
            case 3:
                return "jeudi";
            case 4:
                return "vendredi";
            case 5:
                return "samedi";
            case 6:
                return "dimanche";
        }
        return "";
    }

    public Lieu getLieu() {
        return creneau.getLieu();
    }

    public Niveau getNiveau() {
        return creneau.getNiveau();
    }

    public Responsable getResponsable() {
        return creneau.getResponsable();
    }
}
