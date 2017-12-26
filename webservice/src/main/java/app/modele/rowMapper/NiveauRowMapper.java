package app.modele.rowMapper;

import app.modele.entity.Niveau;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class NiveauRowMapper extends AbstractRowMapper<Niveau> {

    public NiveauRowMapper() {
        super("niveau");
    }

    public NiveauRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public NiveauRowMapper(String tableName, Pair<String, String>... columnName) {
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
