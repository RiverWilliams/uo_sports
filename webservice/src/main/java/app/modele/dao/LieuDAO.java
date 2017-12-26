package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Lieu;
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
public class LieuDAO extends AbstractDao implements ILieuDAO {
    @Autowired
    private RowMapper<Lieu> lieuRowMapper;

    @Autowired
    public LieuDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM lieu WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Lieu> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM lieu";
        return getJdbcTemplate().query(sql, lieuRowMapper);
    }

    @Override
    public Lieu findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM lieu WHERE id=?";
        final List<Lieu> lieux = getJdbcTemplate().query(sql, lieuRowMapper, aLong);
        if (lieux.isEmpty())
            return null;
        else
            return lieux.get(0);
    }

    @Override
    public Long insert(Lieu entity) {
        //language=SQL
        final String sql = "INSERT INTO lieu(nom,ville,adresse) VALUES (?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            preparedStatement.setString(2, entity.getVille());
            preparedStatement.setString(3, entity.getAdresse());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Lieu entity) {
        //language=SQL
        final String sql = "UPDATE lieu SET nom=?,ville=?,adresse=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getVille(), entity.getAdresse(), entity.getId());
    }
}
