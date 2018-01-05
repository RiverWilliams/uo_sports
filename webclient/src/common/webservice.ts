import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {
    Activite, Actualite, CategoriePersonne, CategorieSport, Creneau, Inscription, PieceInscription,
    Sport
} from "./model";
import {makeUrl, Urls} from "./urls";
import {ActualiteJSON, AdaptaeurActualite, AdaptaeurCreneau, CreneauJSON} from "./adaptateur";
import "rxjs/add/operator/map";

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {
    constructor(private http: HttpClient) {
        this._creneaux = new CreneauProvider(http);
        this._activites = new ActiviteProvider(http);
        this._actualites = new ActualiteProvider(http);
        this._categoriesPersonnes = new CategoriePersonneProvider(http);
        console.log('Hello WebserviceProvider Provider');
    }

    private _creneaux: CreneauProvider;

    get creneaux(): CreneauProvider {
        return this._creneaux;
    }

    private _categoriesPersonnes: CategoriePersonneProvider;

    get categoriesPersonnes(): CategoriePersonneProvider {
        return this._categoriesPersonnes;
    }

    private _activites: ActiviteProvider;

    get activites(): ActiviteProvider {
        return this._activites;
    }

    private _actualites: ActualiteProvider;

    get actualites(): ActualiteProvider {
        return this._actualites;
    }
}


class CreneauProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Creneau[]> {
        return this.http.get<CreneauJSON[]>(Urls.CRENEAUX).map(value => value.map(v => AdaptaeurCreneau.fromJSON(v)));
    }

    public post(creneau: Creneau): Observable<string> {
        return this.http.post<HttpResponse<string>>(Urls.CRENEAUX, AdaptaeurCreneau.toJSON(creneau), {observe: "response"}).map(value => value.headers.get('location'));
    }

    public put(creneau: Creneau): Observable<void> {
        return this.http.post<void>(Urls.CRENEAUX, AdaptaeurCreneau.toJSON(creneau));
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.CRENEAUX_ID, {idCreneau: id});
        return this.http.delete<void>(url);
    }

    public get(id: number): Observable<Creneau> {
        const url = makeUrl(Urls.CRENEAUX_ID, {idCreneau: id});
        return this.http.get<CreneauJSON>(url).map(value => AdaptaeurCreneau.fromJSON(value));
    }

    public getEnAttentes(id: number): Observable<Inscription[]> {
        const url = makeUrl(Urls.CRENEAUX_EN_ATTENTES, {idCreneau: id});
        return this.http.get<Inscription[]>(url);
    }

    public getInscrits(id: number): Observable<Inscription[]> {
        const url = makeUrl(Urls.CRENEAUX_INSCRITS, {idCreneau: id});
        return this.http.get<Inscription[]>(url);
    }

}

class ActiviteProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Activite[]> {
        return this.http.get<Activite[]>(Urls.ACTIVITES);
    }

    public post(activite: Activite): Observable<string> {
        return this.http.post<string>(Urls.ACTIVITES, activite, {observe: "response"}).map(value => value.headers.get('location'));
    }

    public put(activite: Activite): Observable<void> {
        return this.http.post<void>(Urls.CRENEAUX, activite);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.ACTIVITES_ID, {idActivite: id});
        return this.http.delete<void>(url);
    }

    public get(id: number): Observable<Activite> {
        const url = makeUrl(Urls.ACTIVITES_ID, {idActivite: id});
        return this.http.get<Activite>(url);
    }

    public getActualites(id: number): Observable<Actualite[]> {
        const url = makeUrl(Urls.ACTIVITES_ACTUALITES, {idActivite: id});
        return this.http.get<ActualiteJSON[]>(url).map(value => value.map(v => AdaptaeurActualite.fromJSON(v)));
    }

    public getCategorieSports(id: number): Observable<CategorieSport[]> {
        const url = makeUrl(Urls.ACTIVITES_CATEGORIES_SPORTS, {idActivite: id});
        return this.http.get<CategorieSport[]>(url);
    }

    public getCreneaux(id: number): Observable<Creneau[]> {
        const url = makeUrl(Urls.ACTIVITES_CRENEAUX, {idActivite: id});
        return this.http.get<CreneauJSON[]>(url).map(value => value.map(v => AdaptaeurCreneau.fromJSON(v)));
    }

    public getSports(id: number): Observable<Sport[]> {
        const url = makeUrl(Urls.ACTIVITES_SPORTS, {idActivite: id});
        return this.http.get<Sport[]>(url);
    }

    public deleteSport(idActivite: number, idSport: number): Observable<void> {
        const url = makeUrl(Urls.ACTIVITES_SPORTS_ID, {idActivite: idActivite, idSport: idSport});
        return this.http.get<void>(url);
    }

}

class ActualiteProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Actualite[]> {
        return this.http.get<ActualiteJSON[]>(Urls.ACTUALITES).map(value => value.map(v => AdaptaeurActualite.fromJSON(v)));
    }

    public put(actualite: Actualite): Observable<void> {
        return this.http.put<void>(Urls.ACTUALITES, AdaptaeurActualite.toJSON(actualite));
    }

    public post(actualite: Actualite): Observable<string> {
        return this.http.post<string>(Urls.ACTUALITES, AdaptaeurActualite.toJSON(actualite), {observe: "response"}).map(value => value.headers.get('location'));
    }

    public get(id: number): Observable<Actualite> {
        const url = makeUrl(Urls.ACTUALITES_ID, {idActualite: id});
        return this.http.get<ActualiteJSON>(url).map(value => AdaptaeurActualite.fromJSON(value));
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.ACTUALITES_ID, {idActualite: id});
        return this.http.delete<void>(url);
    }

    public deleteSport(idActualite: number, idSport: number): Observable<void> {
        const url = makeUrl(Urls.ACTUALITES_SPORTS_ID, {idActualite: idActualite, idSport: idSport});
        return this.http.delete<void>(url);
    }

    public getActivites(id: number): Observable<Activite[]> {
        const url = makeUrl(Urls.ACTUALITES_ACTIVITE, {idActualite: id});
        return this.http.get<Activite[]>(url);
    }

    public getCategorieSports(id: number): Observable<CategorieSport[]> {
        const url = makeUrl(Urls.ACTUALITES_CATEGORIES_SPORTS, {idActualite: id});
        return this.http.get<CategorieSport[]>(url);
    }

    public getSports(id: number): Observable<Sport[]> {
        const url = makeUrl(Urls.ACTUALITES_SPORTS, {idActualite: id});
        return this.http.get<Sport[]>(url);
    }

}

class CategoriePersonneProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<CategoriePersonne[]> {
        return this.http.get<CategoriePersonne[]>(Urls.CATEGORIES_PERSONNES);
    }

    public put(categoriePersonne: CategoriePersonne): Observable<void> {
        return this.http.put<void>(Urls.CATEGORIES_PERSONNES, categoriePersonne);
    }

    public post(categoriePersonne: CategoriePersonne): Observable<string> {
        return this.http.post<string>(Urls.CATEGORIES_PERSONNES, categoriePersonne, {observe: "response"}).map(value => value.headers.get('location'));
    }

    public get(id: number): Observable<CategoriePersonne> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_ID, {idCategoriePersonne: id});
        return this.http.get<CategoriePersonne>(url);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_ID, {idCategoriePersonne: id});
        return this.http.delete<void>(url);
    }

    public deletePiece(idCategoriePersonne: number, idPiece: number): Observable<void> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_PIECES_ID, {
            idCategoriePersonne: idCategoriePersonne,
            idPiece: idPiece
        });
        return this.http.delete<void>(url);
    }

    public getPieces(id: number): Observable<PieceInscription[]> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_PIECES, {idCategoriePersonne: id});
        return this.http.get<PieceInscription[]>(url);
    }
}