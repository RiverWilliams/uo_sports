package app.modele.service;

import java.util.List;

public interface IServiceEntity<T, ID> {
    void deleteById(ID id);

    List<T> findAll();

    T findById(ID id) ;

    ID insert(T entity);

    void update(T entity);
}
