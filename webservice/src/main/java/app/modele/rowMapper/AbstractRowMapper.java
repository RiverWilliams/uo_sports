package app.modele.rowMapper;

import org.springframework.jdbc.core.RowMapper;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractRowMapper<T> implements RowMapper<T> {

    private Map<String, String> columnName = new HashMap<>();
    private String tableName;

    public AbstractRowMapper(Map.Entry<String, String>... columnName) {
        this(null, columnName);
    }

    public AbstractRowMapper(String tableName, Map.Entry<String, String>... columnName) {
        this.tableName = tableName;
        setColumnNameWithTableName(columnName);
    }

    public String getColumnName(String key) {
        final String tableName = getTableName();
        final String defaultValue = tableName == null ? key : tableName + "." + key;
        return columnName.getOrDefault(key, defaultValue);
    }

    private void setColumnName(String tableName, Map.Entry<String, String>... columnName) {
        final String prefix = tableName == null ? "" : tableName + ".";
        for (Map.Entry<String, String> name : columnName) {
            this.columnName.put(name.getKey(), prefix + name.getValue());
        }
    }

    public String getTableName() {
        return tableName;
    }

    public void setColumnNameWithTableName(Map.Entry<String, String>... columnName) {
        setColumnName(getTableName(), columnName);
    }

    public void setColumnName(Map.Entry<String, String>... columnName) {
        setColumnName(null, columnName);
    }

}
