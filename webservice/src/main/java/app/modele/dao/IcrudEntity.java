package app.modele.dao;

import app.exception.DeleteChildBeforeParentException;

import java.util.List;

public interface IcrudEntity<T, ID> {

    void deleteById(ID id) throws DeleteChildBeforeParentException;

    boolean exist(ID id);

    List<T> findAll();

    T findById(ID id);

    ID insert(T entity);

    void update(T entity);

}
