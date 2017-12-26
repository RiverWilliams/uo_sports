package app.modele.rowMapper;

import app.modele.entity.Sport;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class SportRowMapper extends AbstractRowMapper<Sport> {

    public SportRowMapper() {
        super("sport");
    }

    public SportRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public SportRowMapper(String tableName, Pair<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Sport mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Sport sport = new Sport();
        sport.setId(rs.getLong(getColumnName("id")));
        sport.setNom(rs.getString(getColumnName("nom")));
        return sport;
    }
}
