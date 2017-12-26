package app.modele.rowMapper;

import javafx.util.Pair;
import org.springframework.jdbc.core.RowMapper;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractRowMapper<T> implements RowMapper<T> {

    private Map<String, String> columnName = new HashMap<>();
    private String tableName;

    public AbstractRowMapper(Pair<String, String>... columnName) {
        this(null, columnName);
    }

    public AbstractRowMapper(String tableName, Pair<String, String>... columnName) {
        this.tableName = tableName;
        setColumnNameWithTableName(columnName);
    }

    public String getColumnName(String key) {
        final String tableName = getTableName();
        final String defaultValue = tableName == null ? key : tableName + "." + key;
        return columnName.getOrDefault(key, defaultValue);
    }

    private void setColumnName(String tableName, Pair<String, String>... columnName) {
        final String prefix = tableName == null ? "" : tableName + ".";
        for (Pair<String, String> name : columnName) {
            this.columnName.put(name.getKey(), prefix + name.getValue());
        }
    }

    public String getTableName() {
        return tableName;
    }

    public void setColumnNameWithTableName(Pair<String, String>... columnName) {
        setColumnName(getTableName(), columnName);
    }

    public void setColumnName(Pair<String, String>... columnName) {
        setColumnName(null, columnName);
    }

}
