package app.template;

import app.modele.relation.Inscription;

public class InscriptionAffichable {
    Inscription inscription;

    public InscriptionAffichable(Inscription inscription) {
        this.inscription = inscription;
    }

    public CreneauAffichable getCreneau() {
        return new CreneauAffichable(inscription.getCreneau());
    }

    public Boolean getDemande() {
        return inscription.getDemande();
    }

    public Integer getEcts() {
        return inscription.getEcts();
    }

    public Boolean getEnAttente() {
        return inscription.getEnAttente();
    }

    public Integer getNombreHeures() {
        return inscription.getNombreHeures();
    }
}
