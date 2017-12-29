package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Creneau;
import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class CreneauDAO extends AbstractDao implements ICreneauDAO {
    @Autowired
    private RowMapper<Creneau> creneauRowMapper;
    @Autowired
    private RowMapper<Inscription> inscriptionRowMapper;

    @Autowired
    public CreneauDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM creneau WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Creneau> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM creneau"
                + " JOIN activite ON creneau.id_activite = activite.id"
                + " JOIN lieu ON creneau.id_lieu = lieu.id"
                + " JOIN niveau ON creneau.id_niveau = niveau.id"
                + " JOIN responsable ON creneau.id_responsable = responsable.id";
        return getJdbcTemplate().query(sql, creneauRowMapper);
    }

    @Override
    public Creneau findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM creneau WHERE id=?) creneau"
                + " JOIN activite ON creneau.id_activite = activite.id"
                + " JOIN lieu ON creneau.id_lieu = lieu.id"
                + " JOIN niveau ON creneau.id_niveau = niveau.id"
                + " JOIN responsable ON creneau.id_responsable = responsable.id";

        final List<Creneau> creneaux = getJdbcTemplate().query(sql, creneauRowMapper, aLong);
        if (creneaux.isEmpty())
            return null;
        else
            return creneaux.get(0);
    }

    @Override
    public List<Inscription> getEnAttentes(Long id) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM inscription WHERE id_creneau=? AND en_attente ) inscription JOIN personne ON inscription.id_personne=personne.id JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";
        return getJdbcTemplate().query(sql, inscriptionRowMapper, id);
    }

    @Override
    public List<Inscription> getInscrits(Long id) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM inscription WHERE id_creneau=? AND NOT en_attente ) inscription JOIN personne ON inscription.id_personne=personne.id JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";
        return getJdbcTemplate().query(sql, inscriptionRowMapper, id);
    }

    @Override
    public Long insert(Creneau entity) {
        //language=SQL
        final String sql = "INSERT INTO creneau(heure_debut,heure_fin,effectif,id_responsable,id_niveau,id_lieu,id_activite) VALUES (?,?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setTime(1, entity.getHeureDebut());
            preparedStatement.setTime(2, entity.getHeureFin());
            preparedStatement.setInt(3, entity.getEffectif());
            preparedStatement.setLong(4, entity.getResponsable().getId());
            preparedStatement.setLong(5, entity.getNiveau().getId());
            preparedStatement.setLong(6, entity.getLieu().getId());
            preparedStatement.setLong(7, entity.getActivite().getId());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Creneau entity) {
        //language=SQL
        final String sql = "UPDATE creneau SET heure_debut=?,heure_fin=?,effectif=?,id_responsable=?,id_niveau=?,id_lieu=?,id_activite=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getHeureDebut(), entity.getHeureFin(), entity.getEffectif(), entity.getResponsable().getId(), entity.getNiveau().getId(), entity.getLieu().getId(), entity.getActivite().getId(), entity.getId());
    }
}
