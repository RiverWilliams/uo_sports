package app.modele.dao;

import app.modele.relation.Concerne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class ConcerneDAO extends AbstractDao implements IConcerneDAO {

    @Autowired
    public ConcerneDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void delete(Concerne relation) {
        //language=SQL
        final String sql = "DELETE FROM concerne WHERE id_actualite=? AND id_sport=?";
        getJdbcTemplate().update(sql, relation.getIdActualite(), relation.getIdSport());
    }

    @Override
    public boolean exist(Concerne relation) {
        //language=SQL
        final String sql = "SELECT * FROM concerne WHERE id_actualite=? AND id_sport=?";
        final List<Object> query = getJdbcTemplate().query(sql, (rs, rowNum) -> {
            return null;
        }, relation.getIdActualite(), relation.getIdSport());
        return !query.isEmpty();
    }

    @Override
    public void insert(Concerne relation) {
        //language=SQL
        final String sql = "INSERT INTO concerne(id_actualite,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdActualite(), relation.getIdSport());
    }
}
