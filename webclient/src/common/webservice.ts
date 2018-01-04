import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Creneau, Inscription} from "./model";
import {makeUrl, Urls} from "./urls";
import {AdaptaeurCreneau, CreneauJSON} from "./adaptateur";
import "rxjs/add/operator/map";

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

    public creneaux: CreneauxProvider;

    constructor(private http: HttpClient) {
        this.creneaux = new CreneauxProvider(this.http);
        console.log('Hello WebserviceProvider Provider');
    }

}

class CreneauxProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Creneau[]> {
        return this.http.get<CreneauJSON[]>(Urls.CRENEAUX).map(value => value.map(value => AdaptaeurCreneau.fromJSON(value)));
    }

    public post(c: Creneau): Observable<string> {
        return this.http.post<HttpResponse<string>>(Urls.CRENEAUX, AdaptaeurCreneau.toJSON(c), {
            responseType: 'text',
            observe: "response"
        }).map(value => value.headers.get('location'));
    }

    public put(c: Creneau): Observable<void> {
        return this.http.post<void>(Urls.CRENEAUX, AdaptaeurCreneau.toJSON(c));
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