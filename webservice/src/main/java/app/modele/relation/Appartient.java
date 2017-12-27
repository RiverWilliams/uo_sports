package app.modele.relation;

public class Appartient {

    private long idCategorieSport;
    private long idSport;

    public Appartient(long idCategorieSport, long idSport) {
        this.idCategorieSport = idCategorieSport;
        this.idSport = idSport;
    }

    public long getIdCategorieSport() {
        return idCategorieSport;
    }

    public long getIdSport() {
        return idSport;
    }
}
