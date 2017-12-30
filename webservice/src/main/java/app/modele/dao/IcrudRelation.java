package app.modele.dao;

interface IcrudRelation<T> {

    void delete(T relation);

    void insert(T relation);

    boolean exist(T relation);
}
