package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Responsable;
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
public class ResponsableDAO extends AbstractDao implements IResponsableDAO {
    @Autowired
    private RowMapper<Responsable> responsableRowMapper;

    @Autowired
    public ResponsableDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM responsable WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Responsable> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM responsable";
        return getJdbcTemplate().query(sql, responsableRowMapper);
    }

    @Override
    public Responsable findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM responsable WHERE id=?";
        final List<Responsable> responsablex = getJdbcTemplate().query(sql, responsableRowMapper, aLong);
        if (responsablex.isEmpty())
            return null;
        else
            return responsablex.get(0);
    }

    @Override
    public Long insert(Responsable entity) {
        //language=SQL
        final String sql = "INSERT INTO responsable(nom,prenom,email) VALUES (?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            preparedStatement.setString(2, entity.getPrenom());
            preparedStatement.setString(3, entity.getEmail());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Responsable entity) {
        //language=SQL
        final String sql = "UPDATE responsable SET nom=?,prenom=?,email=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getPrenom(), entity.getEmail(), entity.getId());
    }
}
