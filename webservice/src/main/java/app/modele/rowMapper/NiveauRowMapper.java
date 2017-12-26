package app.modele.rowMapper;

import app.modele.entity.Niveau;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class NiveauRowMapper extends AbstractRowMapper<Niveau> {

    public NiveauRowMapper() {
        super("niveau");
    }

    public NiveauRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public NiveauRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Niveau mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Niveau niveau = new Niveau();
        niveau.setId(rs.getLong(getColumnName("id")));
        niveau.setNom(rs.getString(getColumnName("nom")));
        return niveau;
    }
}
