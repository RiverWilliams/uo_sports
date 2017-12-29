package app.modele.dao;

import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class InscriptionDAO extends AbstractDao implements IInscriptionDAO {
    @Autowired
    public InscriptionDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void delete(Inscription inscription) {
        //language=SQL
        final String sql = "DELETE FROM inscription WHERE id_personne=? AND id_creneau=?";
        getJdbcTemplate().update(sql, inscription.getPersonne().getId(), inscription.getCreneau().getId());
    }

    @Override
    public boolean update(Inscription inscription) {
        //language=SQL
        final String sql = "UPDATE inscription SET en_attente=?,demande=?,nombre_heures=?,ects=? WHERE id_personne=? AND id_creneau=? AND(? OR NOT en_attente OR (SELECT nb_inscrit<effectif AS a_place  FROM (SELECT count(*) AS nb_inscrit,c.id,effectif FROM (SELECT effectif,id FROM creneau WHERE id=?) c JOIN inscription ON c.id=inscription.id_creneau WHERE NOT inscription.en_attente) c))";
        final int update = getJdbcTemplate().update(sql, inscription.getEnAttente(), inscription.getDemande(), inscription.getNombreHeures(), inscription.getEcts(), inscription.getPersonne().getId(), inscription.getCreneau().getId(), inscription.getEnAttente(), inscription.getCreneau().getId());
        return update != 0;
    }
}
