package app.modele.rowMapper;

import app.modele.entity.CategoriePersonne;
import app.modele.entity.Personne;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class PersonneRowMapper extends AbstractRowMapper<Personne> {


    @Autowired
    private RowMapper<CategoriePersonne> categoriePersonneRowMapper;

    public PersonneRowMapper() {
        super("personne");
    }

    public PersonneRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public PersonneRowMapper(String tableName, Pair<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Personne mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Personne personne = new Personne();
        personne.setId(rs.getLong(getColumnName("id")));
        personne.setNom(rs.getString(getColumnName("nom")));
        personne.setPrenom(rs.getString(getColumnName("prenom")));
        personne.setAdresse(rs.getString(getColumnName("adresse")));
        personne.setTelephone(rs.getString(getColumnName("telephone")));
        personne.setEmail(rs.getString(getColumnName("email")));
        personne.setCategoriePersonne(categoriePersonneRowMapper.mapRow(rs, rowNum));
        return personne;
    }
}
