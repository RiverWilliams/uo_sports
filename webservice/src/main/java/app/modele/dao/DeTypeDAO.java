package app.modele.dao;

import app.modele.relation.DeType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class DeTypeDAO extends AbstractDao implements IDeTypeDAO {

    @Autowired
    public DeTypeDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void delete(DeType relation) {
        //language=SQL
        final String sql = "DELETE FROM de_type WHERE id_activite=? AND id_sport=?";
        getJdbcTemplate().update(sql, relation.getIdActivite(), relation.getIdSport());
    }

    @Override
    public boolean exist(DeType relation) {
        //language=SQL
        final String sql = "SELECT * FROM de_type WHERE id_activite=? AND id_sport=?";
        final List<Object> query = getJdbcTemplate().query(sql, (rs, rowNum) -> {
            return null;
        }, relation.getIdActivite(), relation.getIdSport());
        return !query.isEmpty();
    }

    @Override
    public void insert(DeType relation) {
        //language=SQL
        final String sql = "INSERT INTO de_type(id_activite,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdActivite(), relation.getIdSport());
    }
}
