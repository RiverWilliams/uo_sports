package app.modele.rowMapper;

import app.modele.entity.*;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class CreneauRowMapper extends AbstractRowMapper<Creneau> {

    @Autowired
    private RowMapper<Niveau> niveauRowMapper;

    @Autowired
    private RowMapper<Lieu> lieuRowMapper;

    @Autowired
    private RowMapper<Responsable> responsableRowMapper;

    @Autowired
    private RowMapper<Activite> activiteRowMapper;

    public CreneauRowMapper() {
        super("creneau");
    }

    public CreneauRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public CreneauRowMapper(String tableName, Pair<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Creneau mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Creneau creneau = new Creneau();
        creneau.setId(rs.getLong(getColumnName("id")));
        creneau.setEffectif(rs.getInt(getColumnName("effectif")));
        creneau.setHeureDebut(rs.getTime(getColumnName("heure_debut")));
        creneau.setHeureFin(rs.getTime(getColumnName("heure_fin")));
        creneau.setResponsable(responsableRowMapper.mapRow(rs, rowNum));
        creneau.setNiveau(niveauRowMapper.mapRow(rs, rowNum));
        creneau.setLieu(lieuRowMapper.mapRow(rs, rowNum));
        creneau.setActivite(activiteRowMapper.mapRow(rs, rowNum));
        return creneau;
    }
}
