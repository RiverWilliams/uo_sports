package app.modele.rowMapper;

import app.modele.entity.Lieu;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class LieuRowMapper extends AbstractRowMapper<Lieu> {

    public LieuRowMapper() {
        super("lieu");
    }

    public LieuRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public LieuRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Lieu mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Lieu lieu = new Lieu();
        lieu.setId(rs.getLong(getColumnName("id")));
        lieu.setNom(rs.getString(getColumnName("nom")));
        lieu.setVille(rs.getString("ville"));
        lieu.setAdresse(rs.getString("adresse"));
        return lieu;
    }
}
