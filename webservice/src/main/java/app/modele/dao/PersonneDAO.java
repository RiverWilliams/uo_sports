package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Personne;
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
public class PersonneDAO extends AbstractDao implements IPersonneDAO {
    @Autowired
    private RowMapper<Personne> personneRowMapper;


    @Autowired
    public PersonneDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM personne WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Personne> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM personne"
                + " JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";
        return getJdbcTemplate().query(sql, personneRowMapper);
    }

    @Override
    public Personne findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM (SELECT * FROM personne WHERE id=?) personne"
                + " JOIN categorie_personne ON personne.id_categorie_personne = categorie_personne.id";

        final List<Personne> personnex = getJdbcTemplate().query(sql, personneRowMapper, aLong);
        if (personnex.isEmpty())
            return null;
        else
            return personnex.get(0);
    }


    @Override
    public Long insert(Personne entity) {
        //language=SQL
        final String sql = "INSERT INTO personne(nom,prenom,adresse,telephone,email,id_categorie_personne) VALUES (?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            preparedStatement.setString(2, entity.getPrenom());
            preparedStatement.setString(3, entity.getAdresse());
            preparedStatement.setString(4, entity.getTelephone());
            preparedStatement.setString(5, entity.getEmail());
            preparedStatement.setLong(6, entity.getCategoriePersonne().getId());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Personne entity) {
        //language=SQL
        final String sql = "UPDATE personne SET nom=?,prenom=?,adresse=?,telephone=?,email=?,id_categorie_personne=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getPrenom(), entity.getAdresse(), entity.getTelephone(), entity.getEmail(), entity.getCategoriePersonne().getId(), entity.getId());
    }
}
