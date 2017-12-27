package app.modele.dao;

public interface IcrudRelation<T> {

    void delete(T relation);

    void insert(T relation);
}
