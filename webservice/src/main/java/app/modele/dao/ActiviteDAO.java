package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Activite;
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
public class ActiviteDAO extends AbstractDao implements IActiviteDAO {

    @Autowired
    private RowMapper<Activite> activiteRowMapper;

    @Autowired
    public ActiviteDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM activite WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Activite> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM activite";
        return getJdbcTemplate().query(sql, activiteRowMapper);
    }

    @Override
    public Activite findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM activite WHERE id=?";
        final List<Activite> activitex = getJdbcTemplate().query(sql, activiteRowMapper, aLong);
        if (activitex.isEmpty())
            return null;
        else
            return activitex.get(0);
    }

    @Override
    public List<Activite> getActivitesByIdActualite(Long idActualite) {
        //language=SQL
        final String sql = "SELECT activite.*" +
                "FROM (SELECT de_type.id_activite" +
                "      FROM (SELECT id_sport" +
                "            FROM concerne" +
                "            WHERE id_actualite = ?) d" +
                "        JOIN de_type ON d.id_sport = de_type.id_activite) d" +
                "  JOIN activite ON d.id_activite = activite.id";

        return getJdbcTemplate().query(sql, activiteRowMapper, idActualite);
    }

    @Override
    public List<Activite> getActivitesByIdCategorieSport(Long idCategorie) {
        //language=SQL
        final String sql = "SELECT activite.*" +
                "FROM (SELECT de_type.id_activite" +
                "      FROM (SELECT id_sport" +
                "            FROM appartient" +
                "            WHERE id_categorie_sport = ?) a" +
                "        JOIN de_type ON a.id_sport = de_type.id_sport) c" +
                "  JOIN activite ON c.id_activite = activite.id";

        return getJdbcTemplate().query(sql, activiteRowMapper, idCategorie);
    }

    @Override
    public List<Activite> getActivitesByIdSport(Long idSport) {
        //language=SQL
        final String sql = "SELECT activite.* FROM (SELECT id_activite FROM de_type WHERE id_sport=?) de_type JOIN activite ON activite.id=de_type.id_activite";
        return getJdbcTemplate().query(sql, activiteRowMapper, idSport);
    }

    @Override
    public Long insert(Activite entity) {
        //language=SQL
        final String sql = "INSERT INTO activite(nom) VALUES (?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Activite entity) {
        //language=SQL
        final String sql = "UPDATE activite SET nom=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getId());
    }
}
