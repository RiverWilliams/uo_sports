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
