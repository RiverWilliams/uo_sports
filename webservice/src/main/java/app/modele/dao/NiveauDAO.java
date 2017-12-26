package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Niveau;
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
public class NiveauDAO extends AbstractDao implements INiveauDAO {
    @Autowired
    private RowMapper<Niveau> niveauRowMapper;

    @Autowired
    public NiveauDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM niveau WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Niveau> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM niveau";
        return getJdbcTemplate().query(sql, niveauRowMapper);
    }

    @Override
    public Niveau findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM niveau WHERE id=?";
        final List<Niveau> niveaux = getJdbcTemplate().query(sql, niveauRowMapper, aLong);
        if (niveaux.isEmpty())
            return null;
        else
            return niveaux.get(0);
    }

    @Override
    public Long insert(Niveau entity) {
        //language=SQL
        final String sql = "INSERT INTO niveau(nom) VALUES (?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Niveau entity) {
        //language=SQL
        final String sql = "UPDATE niveau SET nom=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getId());
    }
}
