package app.modele.dao;

import java.util.List;

public interface IcrudRelation<T> {

    void delete(T id);

    void insert(T relation);
}
