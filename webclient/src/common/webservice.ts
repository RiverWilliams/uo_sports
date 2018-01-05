import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Activite, Actualite, CategorieSport, Creneau, Inscription, Sport} from "./model";
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

    public creneaux: CreneauxProvider;
    public activites: ActivitesProvider;

    constructor(private http: HttpClient) {
        this.creneaux = new CreneauxProvider(http);
        this.activites = new ActivitesProvider(http);
        console.log('Hello WebserviceProvider Provider');
    }

}

class CreneauxProvider {
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

class ActivitesProvider {
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