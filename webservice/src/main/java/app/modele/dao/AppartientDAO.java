package app.modele.dao;

import app.modele.relation.Appartient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class AppartientDAO extends AbstractDao implements IAppartientDAO {

    @Autowired
    public AppartientDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void delete(Appartient relation) {
        //language=SQL
        final String sql = "DELETE FROM appartient WHERE id_categorie_sport=? AND id_sport=?";
        getJdbcTemplate().update(sql, relation.getIdCategorieSport(), relation.getIdSport());
    }

    @Override
    public boolean exist(Appartient relation) {
        //language=SQL
        final String sql = "SELECT * FROM appartient WHERE id_categorie_sport=? AND id_sport=?";
        final List<Object> query = getJdbcTemplate().query(sql, (rs, rowNum) -> {
            return null;
        }, relation.getIdCategorieSport(), relation.getIdSport());

        return !query.isEmpty();
    }

    @Override
    public void insert(Appartient relation) {
        //language=SQL
        final String sql = "INSERT INTO appartient(id_categorie_sport,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdCategorieSport(), relation.getIdSport());
    }
}
