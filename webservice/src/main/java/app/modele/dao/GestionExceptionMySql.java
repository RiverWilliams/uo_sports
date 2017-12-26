package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.SQLException;

class GestionExceptionMySql {
    public static <T> void deleteChildBeforeParent(JdbcTemplate jdbcTemplate, String sql, T id) throws DeleteChildBeforeParentException {
        try {
            jdbcTemplate.update(sql, id);
        } catch (DataIntegrityViolationException e) {
            final SQLException cause = (SQLException) e.getCause();
            if (cause.getErrorCode() == 1451) { //vendorCode trouve avec le débugger
                throw new DeleteChildBeforeParentException(e);
            }else {
                throw e;
            }
        }
    }
}
