package app.modele.rowMapper;

import app.modele.entity.PieceInscription;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Component
public class PieceInscriptionRowMapper extends AbstractRowMapper<PieceInscription> {

    public PieceInscriptionRowMapper() {
        super("piece_inscription");
    }

    public PieceInscriptionRowMapper(Map.Entry<String, String>... columnName) {
        super(columnName);
    }

    public PieceInscriptionRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        super(tableName, columnName);
    }

    @Override
    public PieceInscription mapRow(ResultSet rs, int rowNum) throws SQLException {
        final PieceInscription pieceInscription = new PieceInscription();
        pieceInscription.setId(rs.getLong(getColumnName("id")));
        pieceInscription.setNom(rs.getString(getColumnName("nom")));
        return pieceInscription;
    }
}
