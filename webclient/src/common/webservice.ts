import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {
    Activite,
    Actualite,
    CategoriePersonne,
    CategorieSport,
    Creneau,
    Inscription,
    Lieu,
    Niveau,
    Personne,
    PieceInscription,
    Responsable,
    Sport
} from "./model";
import {makeUrl, Urls} from "./urls";
import {
    ActualiteJSON,
    CreneauJSON,
    PersonneJSON,
    Adaptateur,
} from "./adaptateur";
import "rxjs/add/operator/map";

export interface Erreur {
    code: number,
    message: string;
}

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {
    constructor(http: HttpClient) {
        this._creneaux = new CreneauProvider(http);
        this._activites = new ActiviteProvider(http);
        this._actualites = new ActualiteProvider(http);
        this._categoriesPersonnes = new CategoriePersonneProvider(http);
        this._categoriesSports = new CategorieSportProvider(http);
        this._inscriptions = new InscriptionProvider(http);
        this._lieux = new LieuProvider(http);
        this._niveux = new NiveauProvider(http);
        this._personnes = new PersonneProvider(http);
        this._piecesInscription = new PieceInscriptionProvider(http);
        this._responsables = new ResponsableProvider(http);
        this._sports = new SportProvider(http);
        console.log('Hello WebserviceProvider Provider');
    }

    private _niveux: NiveauProvider;

    get niveux(): NiveauProvider {
        return this._niveux;
    }

    private _personnes: PersonneProvider;

    get personnes(): PersonneProvider {
        return this._personnes;
    }

    private _piecesInscription: PieceInscriptionProvider;

    get piecesInscription(): PieceInscriptionProvider {
        return this._piecesInscription;
    }

    private _responsables: ResponsableProvider;

    get responsables(): ResponsableProvider {
        return this._responsables;
    }

    private _sports: SportProvider;

    get sports(): SportProvider {
        return this._sports;
    }

    private _lieux: LieuProvider;

    get lieux(): LieuProvider {
        return this._lieux;
    }

    private _inscriptions: InscriptionProvider;

    get inscriptions(): InscriptionProvider {
        return this._inscriptions;
    }

    private _creneaux: CreneauProvider;

    get creneaux(): CreneauProvider {
        return this._creneaux;
    }

    private _categoriesSports: CategorieSportProvider;

    get categoriesSports(): CategorieSportProvider {
        return this._categoriesSports;
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
        return this.http.get<CreneauJSON[]>(Urls.CRENEAUX).map(value => value.map(v => Adaptateur.Creneau.fromJSON(v)));
    }

    public post(creneau: Creneau): Observable<number> {
        return this.http.post<number>(Urls.CRENEAUX, Adaptateur.Creneau.toJSON(creneau));
    }

    public put(creneau: Creneau): Observable<void> {
        return this.http.post<void>(Urls.CRENEAUX, Adaptateur.Creneau.toJSON(creneau));
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.CRENEAUX_ID, {idCreneau: id});
        return this.http.delete<void>(url);
    }

    public get(id: number): Observable<Creneau> {
        const url = makeUrl(Urls.CRENEAUX_ID, {idCreneau: id});
        return this.http.get<CreneauJSON>(url).map(Adaptateur.Creneau.fromJSON);
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

    public post(activite: Activite): Observable<number> {
        return this.http.post<number>(Urls.ACTIVITES, activite);
    }

    public addSport(idActivite: number, idSport: number): Observable<void> {
        const url = makeUrl(Urls.ACTIVITES_SPORTS, {idActivite: idActivite});
        return this.http.post<void>(url, idSport);
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
        return this.http.get<ActualiteJSON[]>(url).map(value => value.map(Adaptateur.Actualite.fromJSON));
    }

    public getCategorieSports(id: number): Observable<CategorieSport[]> {
        const url = makeUrl(Urls.ACTIVITES_CATEGORIES_SPORTS, {idActivite: id});
        return this.http.get<CategorieSport[]>(url);
    }

    public getCreneaux(id: number): Observable<Creneau[]> {
        const url = makeUrl(Urls.ACTIVITES_CRENEAUX, {idActivite: id});
        return this.http.get<CreneauJSON[]>(url).map(value => value.map(Adaptateur.Creneau.fromJSON));
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
        return this.http.get<ActualiteJSON[]>(Urls.ACTUALITES).map(value => value.map(Adaptateur.Actualite.fromJSON));
    }

    public put(actualite: Actualite): Observable<void> {
        return this.http.put<void>(Urls.ACTUALITES, Adaptateur.Actualite.toJSON(actualite));
    }

    public post(actualite: Actualite): Observable<number> {
        return this.http.post<number>(Urls.ACTUALITES, Adaptateur.Actualite.toJSON(actualite));
    }

    public get(id: number): Observable<Actualite> {
        const url = makeUrl(Urls.ACTUALITES_ID, {idActualite: id});
        return this.http.get<ActualiteJSON>(url).map(Adaptateur.Actualite.fromJSON);
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

    public addSport(idActualite: number, idSport: number): Observable<void> {
        const url = makeUrl(Urls.ACTUALITES_SPORTS, {idActualite: idActualite});
        return this.http.post<void>(url, idSport);
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

    public post(categoriePersonne: CategoriePersonne): Observable<number> {
        return this.http.post<number>(Urls.CATEGORIES_PERSONNES, categoriePersonne);
    }

    public get(id: number): Observable<CategoriePersonne> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_ID, {idCategoriePersonne: id});
        return this.http.get<CategoriePersonne>(url);
    }

    public addPiece(idCategoriePersonne: number, idPiece: number): Observable<void> {
        const url = makeUrl(Urls.CATEGORIES_PERSONNES_PIECES, {idCategoriePersonne: idCategoriePersonne});
        return this.http.post<void>(url, idPiece);
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

class CategorieSportProvider {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<CategorieSport[]> {
        return this.http.get<CategorieSport[]>(Urls.CATEGORIES_SPORTS);
    }

    public put(categorieSport: CategorieSport): Observable<void> {
        return this.http.put<void>(Urls.CATEGORIES_SPORTS, categorieSport);
    }

    public post(categorieSport: CategorieSport): Observable<number> {
        return this.http.post<number>(Urls.CATEGORIES_SPORTS, categorieSport);
    }

    public get(id: number): Observable<CategorieSport> {
        const url = makeUrl(Urls.CATEGORIES_SPORTS_ID, {idCategorieSport: id});
        return this.http.get<CategorieSport>(url);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.CATEGORIES_SPORTS_ID, {idCategorieSport: id});
        return this.http.delete<void>(url);
    }

    public getActivites(id: number): Observable<Activite[]> {
        const url = makeUrl(Urls.CATEGORIES_SPORTS_ACTIVITES, {idCategorieSport: id});
        return this.http.get<Activite[]>(url);
    }

    public getSports(id: number): Observable<Sport[]> {
        const url = makeUrl(Urls.CATEGORIES_SPORTS_SPORTS, {idCategorieSport: id});
        return this.http.get<Sport[]>(url);
    }

    public getActualites(id: number): Observable<Actualite[]> {
        const url = makeUrl(Urls.CATEGORIES_SPORTS_ACTUALITES, {idCategorieSport: id});
        return this.http.get<ActualiteJSON[]>(url).map(value => value.map(Adaptateur.Actualite.fromJSON));
    }
}

class InscriptionProvider {
    constructor(private http: HttpClient) {
    }

    public put(inscription: Inscription): Observable<void> {
        return this.http.put<void>(Urls.INSCRIPTIONS, Adaptateur.Inscription.toJSON(inscription));
    }

    public post(inscription: Inscription): Observable<number> {
        return this.http.post<number>(Urls.INSCRIPTIONS, Adaptateur.Inscription.toJSON(inscription));
    }

    public delete(idPersonne: number, idCreneau: number): Observable<void> {
        return this.http.delete<void>(Urls.INSCRIPTIONS, {params: new HttpParams().set('idPersonne', idPersonne.toString()).set('idCreneau', idCreneau.toString())});
    }

    public demandeInscription(personne: Personne, inscriptions: Inscription[]): Observable<number> {
        return this.http.post<number>(Urls.INSCRIPTIONS_DEMANDE, {
            personne: Adaptateur.Personne.toJSON(personne),
            inscriptions: inscriptions.map(Adaptateur.Inscription.toJSON)
        });
    }

}

class LieuProvider {
    constructor(private http: HttpClient) {
    }

    public put(lieu: Lieu): Observable<void> {
        return this.http.put<void>(Urls.LIEUX, lieu);
    }

    public post(lieu: Lieu): Observable<number> {
        return this.http.post<number>(Urls.LIEUX, lieu);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.LIEUX_ID, {idLieu: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<Lieu[]> {
        return this.http.get<Lieu[]>(Urls.LIEUX);
    }

    public get(id: number): Observable<Lieu> {
        const url = makeUrl(Urls.LIEUX_ID, {idLieu: id});
        return this.http.get<Lieu>(url);
    }

}

class NiveauProvider {
    constructor(private http: HttpClient) {
    }

    public put(niveau: Niveau): Observable<void> {
        return this.http.put<void>(Urls.NIVEAUX, niveau);
    }

    public post(niveau: Niveau): Observable<number> {
        return this.http.post<number>(Urls.NIVEAUX, niveau);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.NIVEAUX_ID, {idNiveau: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<Niveau[]> {
        return this.http.get<Niveau[]>(Urls.NIVEAUX);
    }

    public get(id: number): Observable<Niveau> {
        const url = makeUrl(Urls.NIVEAUX_ID, {idNiveau: id});
        return this.http.get<Niveau>(url);
    }
}


class PersonneProvider {
    constructor(private http: HttpClient) {
    }

    public put(personne: Personne): Observable<void> {
        return this.http.put<void>(Urls.PERSONNES, Adaptateur.Personne.toJSON(personne));
    }

    public post(personne: Personne): Observable<number> {
        return this.http.post<number>(Urls.PERSONNES, Adaptateur.Personne.toJSON(personne));
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.PERSONNES_ID, {idPersonne: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<Personne[]> {
        return this.http.get<PersonneJSON[]>(Urls.PERSONNES).map(value => value.map(Adaptateur.Personne.fromJSON));
    }

    public get(id: number): Observable<Personne> {
        const url = makeUrl(Urls.PERSONNES_ID, {idPersonne: id});
        return this.http.get<PersonneJSON>(url).map(Adaptateur.Personne.fromJSON);
    }
}

class PieceInscriptionProvider {
    constructor(private http: HttpClient) {
    }

    public put(pieceInscription: PieceInscription): Observable<void> {
        return this.http.put<void>(Urls.PIECES_INSCRIPTION, pieceInscription);
    }

    public post(pieceInscription: PieceInscription): Observable<number> {
        return this.http.post<number>(Urls.PIECES_INSCRIPTION, pieceInscription);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.PIECES_INSCRIPTION_ID, {idPieceInscription: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<PieceInscription[]> {
        return this.http.get<PieceInscription[]>(Urls.PIECES_INSCRIPTION);
    }

    public get(id: number): Observable<PieceInscription> {
        const url = makeUrl(Urls.PIECES_INSCRIPTION_ID, {idPieceInscription: id});
        return this.http.get<PieceInscription>(url);
    }
}

class ResponsableProvider {
    constructor(private http: HttpClient) {
    }

    public put(responsable: Responsable): Observable<void> {
        return this.http.put<void>(Urls.RESPONSABLES, responsable);
    }

    public post(responsable: Responsable): Observable<number> {
        return this.http.post<number>(Urls.RESPONSABLES, responsable);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.RESPONSABLES_ID, {idPieceInscription: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<Responsable[]> {
        return this.http.get<Responsable[]>(Urls.RESPONSABLES);
    }

    public get(id: number): Observable<Responsable> {
        const url = makeUrl(Urls.RESPONSABLES_ID, {idResponsable: id});
        return this.http.get<Responsable>(url);
    }

    public getCreneaux(id: number): Observable<Creneau[]> {
        const url = makeUrl(Urls.RESPONSABLES_CRENEAUX, {idResponsable: id});
        return this.http.get<CreneauJSON[]>(url).map(value => value.map(Adaptateur.Creneau.fromJSON));
    }
}

class SportProvider {
    constructor(private http: HttpClient) {
    }

    public put(sport: Sport): Observable<void> {
        return this.http.put<void>(Urls.SPORTS, sport);
    }

    public post(sport: Sport): Observable<number> {
        return this.http.post<number>(Urls.SPORTS, sport);
    }

    public addCategorie(idSport: number, idCategorie: number): Observable<void> {
        const url = makeUrl(Urls.SPORTS_CATEGORIES_SPORTS, {idSport: idSport});
        return this.http.post<void>(url, idCategorie);
    }

    public delete(id: number): Observable<void> {
        const url = makeUrl(Urls.SPORTS_ID, {idSport: id});
        return this.http.delete<void>(url);
    }

    public getAll(): Observable<Sport[]> {
        return this.http.get<Sport[]>(Urls.SPORTS);
    }

    public get(id: number): Observable<Sport> {
        const url = makeUrl(Urls.SPORTS_ID, {idSport: id});
        return this.http.get<Sport>(url);
    }

    public getActivites(id: number): Observable<Activite[]> {
        const url = makeUrl(Urls.SPORTS_ACTIVITES, {idSport: id});
        return this.http.get<Activite[]>(url);
    }

    public getActualites(id: number): Observable<Actualite[]> {
        const url = makeUrl(Urls.SPORTS_ACTUALITES, {idSport: id});
        return this.http.get<ActualiteJSON[]>(url).map(value => value.map(Adaptateur.Actualite.fromJSON));
    }

    public getCategoriesSport(id: number): Observable<CategorieSport[]> {
        const url = makeUrl(Urls.SPORTS_CATEGORIES_SPORTS, {idSport: id});
        return this.http.get<CategorieSport[]>(url);
    }

    public deleteCategoriesSport(idSport: number, idCategorieSport: number): Observable<void> {
        const url = makeUrl(Urls.SPORTS_CATEGORIES_SPORTS_ID, {idSport: idSport, idCategorieSport: idCategorieSport});
        return this.http.delete<void>(url);
    }

}