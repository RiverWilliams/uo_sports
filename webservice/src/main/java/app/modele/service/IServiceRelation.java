package app.modele.service;

interface IServiceRelation<T> {
    void delete(T relation);

    void insert(T relation);

}
