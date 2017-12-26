package app.modele.rowMapper;

import app.modele.entity.CategorieSport;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class CategorieSportRowMapper extends AbstractRowMapper<CategorieSport> {

    public CategorieSportRowMapper() {
        super("categorie_sport");
    }

    public CategorieSportRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public CategorieSportRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public CategorieSport mapRow(ResultSet rs, int rowNum) throws SQLException {
        final CategorieSport categorieSport = new CategorieSport();
        categorieSport.setId(rs.getLong(getColumnName("id")));
        categorieSport.setNom(rs.getString(getColumnName("nom")));
        return categorieSport;
    }
}
