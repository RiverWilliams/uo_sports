package app.modele.rowMapper;

import app.modele.entity.CategoriePersonne;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class CategoriePersonneRowMapper extends AbstractRowMapper<CategoriePersonne> {

    public CategoriePersonneRowMapper() {
        super("categorie_personne");
    }

    public CategoriePersonneRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public CategoriePersonneRowMapper(String tableName, Pair<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public CategoriePersonne mapRow(ResultSet rs, int rowNum) throws SQLException {
        final CategoriePersonne categoriePersonne = new CategoriePersonne();
        categoriePersonne.setId(rs.getLong(getColumnName("id")));
        categoriePersonne.setNom(rs.getString(getColumnName("nom")));
        categoriePersonne.setPrix(rs.getFloat(getColumnName("prix")));
        return categoriePersonne;
    }
}
