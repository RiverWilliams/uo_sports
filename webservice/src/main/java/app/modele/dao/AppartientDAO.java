package app.modele.dao;

import app.modele.relation.Appartient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

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
    public void insert(Appartient relation) {
        //language=SQL
        final String sql = "INSERT INTO appartient(id_categorie_sport,id_sport) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdCategorieSport(), relation.getIdSport());
    }
}
