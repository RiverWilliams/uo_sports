package app.modele.rowMapper;

import app.modele.entity.Lieu;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class LieuRowMapper extends AbstractRowMapper<Lieu> {

    public LieuRowMapper() {
        super("lieu");
    }

    public LieuRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public LieuRowMapper(String tableName, Pair<String, String>... columnName) {
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
