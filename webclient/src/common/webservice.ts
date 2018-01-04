import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Creneau} from "./model";
import {URI} from "urijs";
import {Urls} from "./urls";
import "rxjs/add/operator/map"
import {AdaptaeurCreneau, CreneauJSON} from "./adaptateur";

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
        return this.http.get<CreneauJSON[]>(Urls.CRENEAUX.toString()).map(value => value.map(value => AdaptaeurCreneau.fromJSON(value)));
    }

}