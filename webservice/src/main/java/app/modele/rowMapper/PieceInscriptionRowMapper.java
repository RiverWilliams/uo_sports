package app.modele.rowMapper;

import app.modele.entity.PieceInscription;
import javafx.util.Pair;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class PieceInscriptionRowMapper extends AbstractRowMapper<PieceInscription> {

    public PieceInscriptionRowMapper() {
        super("piece_inscription");
    }

    public PieceInscriptionRowMapper(Pair<String, String>... columnName) {
        super(columnName);
    }

    public PieceInscriptionRowMapper(String tableName, Pair<String, String>... columnName) {
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
