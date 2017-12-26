package app.modele.rowMapper;

import app.modele.entity.Activite;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ActiviteRowMapper extends AbstractRowMapper<Activite> {

    public ActiviteRowMapper() {
        super("activite");
    }

    public ActiviteRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public ActiviteRowMapper(String tableName, Pair<String, String>... columnName) {
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
