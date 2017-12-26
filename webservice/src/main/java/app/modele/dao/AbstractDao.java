package app.modele.dao;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

import javax.sql.DataSource;

public abstract class AbstractDao extends JdbcDaoSupport {
    public AbstractDao(DataSource dataSource) {
        setDataSource(dataSource);
    }
}
