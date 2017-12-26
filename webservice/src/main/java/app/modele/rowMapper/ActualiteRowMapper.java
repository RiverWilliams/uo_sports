package app.modele.rowMapper;

import app.modele.entity.Actualite;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class ActualiteRowMapper extends AbstractRowMapper<Actualite> {

    public ActualiteRowMapper() {
        super("actualite");
    }

    public ActualiteRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public ActualiteRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Actualite mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Actualite actualite = new Actualite();
        actualite.setId(rs.getLong(getColumnName("id")));
        actualite.setTitre(rs.getString(getColumnName("titre")));
        actualite.setImage(rs.getString(getColumnName("image")));
        actualite.setDescCourte(rs.getString(getColumnName("desc_courte")));
        actualite.setDescLongue(rs.getString(getColumnName("desc_longue")));
        actualite.setDateDebut(rs.getDate(getColumnName("date_debut")));
        actualite.setDateFin(rs.getDate(getColumnName("date_fin")));
        actualite.setDateMiseEnLigne(rs.getDate(getColumnName("date_mise_en_ligne")));
        return actualite;
    }
}
