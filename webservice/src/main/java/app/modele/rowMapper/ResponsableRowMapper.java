package app.modele.rowMapper;

import app.modele.entity.Responsable;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class ResponsableRowMapper extends AbstractRowMapper<Responsable> {

    public ResponsableRowMapper() {
        super("responsable");
    }

    public ResponsableRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public ResponsableRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Responsable mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Responsable responsable = new Responsable();
        responsable.setId(rs.getLong(getColumnName("id")));
        responsable.setNom(rs.getString(getColumnName("nom")));
        responsable.setPrenom(rs.getString("prenom"));
        responsable.setEmail(rs.getString("email"));
        return responsable;
    }
}
