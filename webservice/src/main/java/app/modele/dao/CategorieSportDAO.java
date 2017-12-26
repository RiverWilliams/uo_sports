package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.CategorieSport;
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
public class CategorieSportDAO extends AbstractDao implements ICategorieSportDAO {
    @Autowired
    private RowMapper<CategorieSport> categorieSportRowMapper;

    @Autowired
    public CategorieSportDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM categorie_sport WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<CategorieSport> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM categorie_sport";
        return getJdbcTemplate().query(sql, categorieSportRowMapper);
    }

    @Override
    public CategorieSport findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM categorie_sport WHERE id=?";
        final List<CategorieSport> categorieSportx = getJdbcTemplate().query(sql, categorieSportRowMapper, aLong);
        if (categorieSportx.isEmpty())
            return null;
        else
            return categorieSportx.get(0);
    }

    @Override
    public Long insert(CategorieSport entity) {
        //language=SQL
        final String sql = "INSERT INTO categorie_sport(nom) VALUES (?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(CategorieSport entity) {
        //language=SQL
        final String sql = "UPDATE categorie_sport SET nom=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getId());
    }
}
