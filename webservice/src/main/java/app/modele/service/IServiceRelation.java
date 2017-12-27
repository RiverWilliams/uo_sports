package app.modele.service;

public interface IServiceRelation<T> {
    void delete(T id);

    void insert(T entity);

}
