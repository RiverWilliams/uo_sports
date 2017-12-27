package app.modele.relation;

public class Concerne {
    private long idActualite;
    private long idSport;

    public Concerne(long idActualite, long idSport) {

        this.idActualite = idActualite;
        this.idSport = idSport;
    }

    public long getIdActualite() {
        return idActualite;
    }

    public long getIdSport() {
        return idSport;
    }
}
