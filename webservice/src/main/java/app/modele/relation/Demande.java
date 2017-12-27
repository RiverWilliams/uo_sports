package app.modele.relation;

public class Demande {

    private long idCategoriePersonne;
    private long idPieceInscription;
    public Demande(Long idCategoriePersonne, Long idPieceInscription) {
        this.idCategoriePersonne = idCategoriePersonne;
        this.idPieceInscription = idPieceInscription;
    }

    public long getIdCategoriePersonne() {
        return idCategoriePersonne;
    }

    public long getIdPieceInscription() {
        return idPieceInscription;
    }
}
