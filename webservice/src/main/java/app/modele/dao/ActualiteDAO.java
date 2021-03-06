package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.Actualite;
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
public class ActualiteDAO extends AbstractDao implements IActualiteDAO {
    @Autowired
    RowMapper<Sport> sportRowMapper;
    @Autowired
    private RowMapper<Actualite> actualiteRowMapper;

    @Autowired
    public ActualiteDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM actualite WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<Actualite> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM actualite";
        return getJdbcTemplate().query(sql, actualiteRowMapper);
    }

    @Override
    public Actualite findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM actualite WHERE id=?";
        final List<Actualite> actualitex = getJdbcTemplate().query(sql, actualiteRowMapper, aLong);
        if (actualitex.isEmpty())
            return null;
        else
            return actualitex.get(0);
    }

    @Override
    public List<Actualite> getActualiteByIdSport(Long idSport) {
        //language=SQL
        final String sql = "SELECT actualite.* FROM (SELECT id_actualite FROM concerne WHERE id_sport=?) concerne JOIN actualite ON actualite.id=concerne.id_actualite";
        return getJdbcTemplate().query(sql, actualiteRowMapper, idSport);
    }

    @Override
    public List<Actualite> getActualitesByIdActivite(Long idActivite) {
        //language=SQL
        final String sql = "SELECT actualite.*" +
                "FROM (SELECT concerne.id_actualite" +
                "      FROM (SELECT id_sport" +
                "            FROM de_type" +
                "            WHERE id_activite = ?) d" +
                "        JOIN concerne ON d.id_sport = concerne.id_sport) c" +
                "  JOIN actualite ON c.id_actualite = actualite.id";
        return getJdbcTemplate().query(sql, actualiteRowMapper, idActivite);
    }

    @Override
    public List<Actualite> getActualitesByIdCategorieSport(Long idCategorie) {
        //language=SQL
        final String sql = "SELECT actualite.*" +
                "FROM (SELECT concerne.id_actualite" +
                "      FROM (SELECT id_sport" +
                "            FROM appartient" +
                "            WHERE id_categorie_sport = ?) a" +
                "        JOIN concerne ON a.id_sport = concerne.id_actualite) c" +
                "  JOIN actualite ON c.id_actualite = actualite.id";

        return getJdbcTemplate().query(sql, actualiteRowMapper, idCategorie);
    }

    @Override
    public Long insert(Actualite entity) {
        //language=SQL
        final String sql = "INSERT INTO actualite(titre,image,desc_courte,desc_longue,date_debut,date_fin,date_mise_en_ligne) VALUES (?,?,?,?,?,?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getTitre());
            preparedStatement.setString(2, entity.getImage());
            preparedStatement.setString(3, entity.getDescCourte());
            preparedStatement.setString(4, entity.getDescLongue());
            preparedStatement.setDate(5, entity.getDateDebut());
            preparedStatement.setDate(6, entity.getDateFin());
            preparedStatement.setDate(7, entity.getDateMiseEnLigne());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(Actualite entity) {
        //language=SQL
        final String sql = "UPDATE actualite SET titre=?,image=?,desc_courte=?,desc_longue=?,date_debut=?,date_fin=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getTitre(), entity.getImage(), entity.getDescCourte(), entity.getDescLongue(), entity.getDateDebut(), entity.getDateFin(), entity.getId());
    }
}
