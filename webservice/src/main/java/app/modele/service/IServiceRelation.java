package app.modele.service;

public interface IServiceRelation<T> {
    void delete(T relation);

    void insert(T relation);

}
