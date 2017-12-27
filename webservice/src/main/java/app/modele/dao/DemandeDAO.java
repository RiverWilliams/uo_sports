package app.modele.dao;

import app.modele.relation.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class DemandeDAO extends AbstractDao implements IDemandeDAO {

    @Autowired
    public DemandeDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void delete(Demande relation) {
        //language=SQL
        final String sql = "DELETE FROM demande WHERE id_categorie_personne=? AND id_piece_inscription=?";
        getJdbcTemplate().update(sql, relation.getIdCategoriePersonne(), relation.getIdPieceInscription());
    }

    @Override
    public void insert(Demande relation) {
        //language=SQL
        final String sql = "INSERT INTO demande(id_categorie_personne,id_piece_inscription) VALUES (?,?)";
        getJdbcTemplate().update(sql, relation.getIdCategoriePersonne(), relation.getIdPieceInscription());
    }

}
