package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import app.modele.entity.PieceInscription;
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
public class PieceInscriptionDAO extends AbstractDao implements IPieceInscriptionDAO {
    @Autowired
    private RowMapper<PieceInscription> pieceInscriptionRowMapper;

    @Autowired
    public PieceInscriptionDAO(DataSource dataSource) {
        super(dataSource);
    }

    @Override
    public void deleteById(Long aLong) throws DeleteChildBeforeParentException {
        //language=SQL
        final String sql = "DELETE FROM piece_inscription WHERE id=?";
        GestionExceptionMySql.deleteChildBeforeParent(getJdbcTemplate(), sql, aLong);
    }

    @Override
    public boolean exist(Long aLong) {
        return findById(aLong) != null;
    }

    @Override
    public List<PieceInscription> findAll() {
        //language=SQL
        final String sql = "SELECT * FROM piece_inscription";
        return getJdbcTemplate().query(sql, pieceInscriptionRowMapper);
    }

    @Override
    public PieceInscription findById(Long aLong) {
        //language=SQL
        final String sql = "SELECT * FROM piece_inscription WHERE id=?";
        final List<PieceInscription> pieceInscriptionx = getJdbcTemplate().query(sql, pieceInscriptionRowMapper, aLong);
        if (pieceInscriptionx.isEmpty())
            return null;
        else
            return pieceInscriptionx.get(0);
    }

    @Override
    public List<PieceInscription> getPiecesByIdCategoriePersonne(Long idCategorie) {
        //language=SQL
        final String sql = "SELECT piece_inscription.* FROM (SELECT id_piece_inscription FROM demande WHERE id_categorie_personne=?) demande JOIN piece_inscription ON demande.id_piece_inscription=piece_inscription.id";
        return getJdbcTemplate().query(sql, pieceInscriptionRowMapper, idCategorie);
    }

    @Override
    public Long insert(PieceInscription entity) {
        //language=SQL
        final String sql = "INSERT INTO piece_inscription(nom) VALUES (?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        getJdbcTemplate().update(con -> {
            final PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, entity.getNom());
            return preparedStatement;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    @Override
    public void update(PieceInscription entity) {
        //language=SQL
        final String sql = "UPDATE piece_inscription SET nom=? WHERE id=?";
        getJdbcTemplate().update(sql, entity.getNom(), entity.getId());
    }
}
