package app.modele.relation;

public class DeType {
    private long idSport;
    private long idActivite;

    public DeType(long idSport, long idActivite) {

        this.idSport = idSport;
        this.idActivite = idActivite;
    }

    public long getIdActivite() {
        return idActivite;
    }

    public long getIdSport() {
        return idSport;
    }
}
