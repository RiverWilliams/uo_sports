package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
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
public class SportDAO extends AbstractDao implements ISportDAO {
    @Autowired
    private RowMapper<Sport> sportRowMapper;
    @Autowired
    private RowMapper<Activite> activiteRowMapper;
    @Autowired
    private RowMapper<Actualite> actualiteRowMapper;

    @Autowired
    private RowMapper<CategorieSport> categorieSportRowMapper;

    @Autowired
    public SportDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM sport WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Sport> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM sport";
        return getJdbcTemplate().query(sql, sportRowMapper);
    }

    @Override
    public Sport findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM sport WHERE id=?";
        final List<Sport> sportx = getJdbcTemplate().query(sql, sportRowMapper, aLong);
        if (sportx.isEmpty())
            return null;
        else
            return sportx.get(0);
    }

    @Override
    public List<Activite> getActivites(Long idSport) {
        //language=SQL
        final String sql = "SELECT activite.* FROM (SELECT id_activite FROM de_type WHERE id_sport=?) de_type JOIN activite ON activite.id=de_type.id_activite";
        return getJdbcTemplate().query(sql, activiteRowMapper, idSport);
    }

    @Override
    public List<Actualite> getActualite(Long idSport) {
        //language=SQL
        final String sql = "SELECT actualite.* FROM (SELECT id_actualite FROM concerne WHERE id_sport=?) concerne JOIN actualite ON actualite.id=concerne.id_actualite";
        return getJdbcTemplate().query(sql, actualiteRowMapper, idSport);
    }

    @Override
    public List<CategorieSport> getCategoriesSports(Long idSport) {
        //language=SQL
        final String sql = "SELECT categorie_sport.* FROM (SELECT id_categorie_sport FROM appartient WHERE id_sport=?) a JOIN categorie_sport ON categorie_sport.id=a.id_categorie_sport";
        return getJdbcTemplate().query(sql, categorieSportRowMapper, idSport);
    }

    @Override
    public Long insert(Sport entity) {
        //language=SQL
        final String sql = "INSERT INTO sport(nom) VALUES (?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Sport entity) {
        //language=SQL
        final String sql = "UPDATE sport SET nom=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getId());
    }
}
