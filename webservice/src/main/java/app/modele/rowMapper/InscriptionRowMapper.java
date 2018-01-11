package app.modele.rowMapper;

import app.modele.entity.Creneau;
import app.modele.entity.Personne;
import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class InscriptionRowMapper extends AbstractRowMapper<Inscription> {

    @Autowired
    private RowMapper<Personne> personneRowMapper;
    @Autowired
    private RowMapper<Creneau> creneauRowMapper;

    public InscriptionRowMapper() {
        super("inscription");
    }

    public InscriptionRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public InscriptionRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public Inscription mapRow(ResultSet rs, int rowNum) throws SQLException {
        final Inscription inscription = new Inscription();

        inscription.setDemande(rs.getBoolean("demande"));
        inscription.setEnAttente(rs.getBoolean("en_attente"));
        inscription.setEcts(rs.getInt("ects"));
        inscription.setNombreHeures(rs.getInt("nombre_heures"));
        inscription.setPersonne(personneRowMapper.mapRow(rs, rowNum));
        inscription.setCreneau(creneauRowMapper.mapRow(rs, rowNum));
        return inscription;
    }
}
