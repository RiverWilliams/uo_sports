package app.modele.rowMapper;

import app.modele.entity.Activite;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class ActiviteRowMapper extends AbstractRowMapper<Activite> {

    public ActiviteRowMapper() {
        super("activite");
    }

    public ActiviteRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public ActiviteRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Activite mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Activite activite = new Activite();
        activite.setId(rs.getLong(getColumnName("id")));
        activite.setNom(rs.getString(getColumnName("nom")));
        return activite;
    }
}
