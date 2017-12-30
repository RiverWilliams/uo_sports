package app.modele.dao;

import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class InscriptionDAO extends AbstractDao implements IInscriptionDAO {
    @Autowired
    private RowMapper<Inscription> inscriptionRowMapper;

    @Autowired
    public InscriptionDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public boolean delete(Inscription inscription) {
        //language=SQL
        final String sql = "DELETE FROM inscription WHERE id_personne=? AND id_creneau=? AND en_attente";
        final int update = getJdbcTemplate().update(sql, inscription.getPersonne().getId(), inscription.getCreneau().getId());
        return update != 0;
    }

    @Override
    public boolean exist(Inscription inscription) {
        //language=SQL
        final String sql = "SELECT * FROM inscription WHERE id_personne=? AND id_creneau=?";
        final List<Object> query = getJdbcTemplate().query(sql, (rs, rowNum) -> {
            return null;
        }, inscription.getPersonne().getId(), inscription.getCreneau().getId());

        return !query.isEmpty();
    }

    @Override
    public List<Inscription> getEnAttentesByIdCreneau(Long id) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM inscription WHERE id_creneau=? AND en_attente ) inscription JOIN personne ON inscription.id_personne=personne.id JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";
        return getJdbcTemplate().query(sql, inscriptionRowMapper, id);
    }

    @Override
    public Inscription getInscription(Inscription inscription) {
        //language=SQL
        final String sql = "SELECT * FROM  (SELECT * FROM inscription WHERE id_creneau=? AND id_personne=?) inscription JOIN personne ON inscription.id_personne=personne.id JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id JOIN creneau ON inscription.id_creneau=creneau.id JOIN niveau ON creneau.id_niveau = niveau.id JOIN responsable ON creneau.id_responsable = responsable.id JOIN activite ON creneau.id_activite = activite.id JOIN lieu ON creneau.id_lieu = lieu.id";
        final List<Inscription> query = getJdbcTemplate().query(sql, inscriptionRowMapper, inscription.getCreneau().getId(), inscription.getPersonne().getId());
        if (query.isEmpty())
            return null;
        return query.get(0);
    }


    @Override
    public List<Inscription> getInscriptionsByIdPersonne(Long id) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM inscription WHERE id_personne=?) inscription JOIN creneau ON inscription.id_creneau=creneau.id JOIN responsable ON creneau.id_responsable = responsable.id JOIN niveau ON creneau.id_niveau = niveau.id JOIN activite ON creneau.id_activite = activite.id JOIN lieu ON creneau.id_lieu = lieu.id";
        return getJdbcTemplate().query(sql, inscriptionRowMapper, id);
    }

    @Override
    public List<Inscription> getInscritsByIdCreneau(Long id) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM inscription WHERE id_creneau=? AND NOT en_attente ) inscription JOIN personne ON inscription.id_personne=personne.id JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";
        return getJdbcTemplate().query(sql, inscriptionRowMapper, id);
    }

    @Override
    public void insert(Inscription inscription) {
        //language=SQL
        final String sql = "INSERT INTO inscription(id_personne,id_creneau,en_attente,demande,ects,nombre_heures) VALUES (?,?,?,?,?,?)";
        getJdbcTemplate().update(sql, inscription.getPersonne().getId(), inscription.getCreneau().getId(), inscription.getEnAttente(), inscription.getDemande(), inscription.getEcts(), inscription.getNombreHeures());
    }

    @Override
    public boolean update(Inscription inscription) {
        //language=SQL
        final String sql = "UPDATE inscription SET en_attente=?,demande=?,nombre_heures=?,ects=? WHERE id_personne=? AND id_creneau=? AND(? OR NOT en_attente OR (SELECT nb_inscrit<effectif AS a_place  FROM (SELECT count(*) AS nb_inscrit,c.id,effectif FROM (SELECT effectif,id FROM creneau WHERE id=?) c JOIN inscription ON c.id=inscription.id_creneau WHERE NOT inscription.en_attente) c))";
        final int update = getJdbcTemplate().update(sql, inscription.getEnAttente(), inscription.getDemande(), inscription.getNombreHeures(), inscription.getEcts(), inscription.getPersonne().getId(), inscription.getCreneau().getId(), inscription.getEnAttente(), inscription.getCreneau().getId());
        return update != 0;
    }

}
