package app.modele.dao;

import app.modele.relation.Concerne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

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
    public void insert(Concerne relation) {
        //language=SQL
        final String sql = "INSERT INTO concerne(id_actualite,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdActualite(), relation.getIdSport());
    }
}
