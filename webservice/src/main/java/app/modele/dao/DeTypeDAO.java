package app.modele.dao;

import app.modele.relation.DeType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

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
    public void insert(DeType relation) {
        //language=SQL
        final String sql = "INSERT INTO de_type(id_activite,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdActivite(), relation.getIdSport());
    }
}
