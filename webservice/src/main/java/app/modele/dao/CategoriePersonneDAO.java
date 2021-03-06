package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.CategoriePersonne;
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
public class CategoriePersonneDAO extends AbstractDao implements ICategoriePersonneDAO {
    @Autowired
    private RowMapper<CategoriePersonne> categoriePersonneRowMapper;

    @Autowired
    public CategoriePersonneDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM categorie_personne WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<CategoriePersonne> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM categorie_personne";
        return getJdbcTemplate().query(sql, categoriePersonneRowMapper);
    }

    @Override
    public CategoriePersonne findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM categorie_personne WHERE id=?";
        final List<CategoriePersonne> categoriePersonnex = getJdbcTemplate().query(sql, categoriePersonneRowMapper, aLong);
        if (categoriePersonnex.isEmpty())
            return null;
        else
            return categoriePersonnex.get(0);
    }


    @Override
    public Long insert(CategoriePersonne entity) {
        //language=SQL
        final String sql = "INSERT INTO categorie_personne(nom,prix) VALUES (?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            preparedStatement.setFloat(2, entity.getPrix());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(CategoriePersonne entity) {
        //language=SQL
        final String sql = "UPDATE categorie_personne SET nom=?,prix=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getPrix(), entity.getId());
    }
}
