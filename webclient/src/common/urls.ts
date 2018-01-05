export namespace Urls {
    export const BASE: string = "http://localhost:8080/sports";
    //CRENEAUX
    export const CRENEAUX: string = BASE + "/creneaux";
    export const CRENEAUX_ID: string = CRENEAUX + "/{idCreneau}";
    export const CRENEAUX_EN_ATTENTES: string = CRENEAUX_ID + "/en_attentes";
    export const CRENEAUX_INSCRITS: string = CRENEAUX_ID + "/inscrits";
//ACTIVITES
    export const ACTIVITES: string = BASE + "/activites";
    export const ACTIVITES_ID: string = ACTIVITES + "/{idActivite}";
    export const ACTIVITES_ACTUALITES: string = ACTIVITES_ID + "/actualites";
    export const ACTIVITES_CATEGORIES_SPORTS: string = ACTIVITES_ID + "/categories_sports";
    export const ACTIVITES_CRENEAUX: string = ACTIVITES_ID + "/creneaux";
    export const ACTIVITES_SPORTS: string = ACTIVITES_ID + "/sports";
    export const ACTIVITES_SPORTS_ID: string = ACTIVITES_SPORTS + "/{idSport}";
//ACTUALIES
    export const ACTUALITES: string = BASE + "/actualites";
    export const ACTUALITES_ID: string = ACTUALITES + "/{idActualite}";
    export const ACTUALITES_ACTIVITE: string = ACTUALITES_ID + "/activites";
    export const ACTUALITES_CATEGORIES_SPORTS: string = ACTUALITES_ID + "/categories_sports";
    export const ACTUALITES_SPORTS: string = ACTUALITES_ID + "/sports";
    export const ACTUALITES_SPORTS_ID: string = ACTUALITES_SPORTS + "/{idSport}";
    //CATEGORIES_PERSONNES
    export const CATEGORIES_PERSONNES: string = BASE + "/categories_personnes";
    export const CATEGORIES_PERSONNES_ID: string = CATEGORIES_PERSONNES + "/{idCategoriePersonne}";
    export const CATEGORIES_PERSONNES_PIECES: string = CATEGORIES_PERSONNES_ID + "/pieces";
    export const CATEGORIES_PERSONNES_PIECES_ID: string = CATEGORIES_PERSONNES_PIECES + "/{idPiece}";
//CATEGORIES_SPORTS
    export const CATEGORIES_SPORTS: string = BASE + "/categories_sports";
    export const CATEGORIES_SPORTS_ID: string = CATEGORIES_SPORTS + "/{idCategorieSport}";
    export const CATEGORIES_SPORTS_ACTIVITES: string = CATEGORIES_SPORTS_ID + "/activites";
    export const CATEGORIES_SPORTS_ACTUALITES: string = CATEGORIES_SPORTS_ID + "/actualites";
    export const CATEGORIES_SPORTS_SPORTS: string = CATEGORIES_SPORTS_ID + "/sports";
//INSCRIPTIONS
    export const INSCRIPTIONS: string = BASE + "/inscriptions";
    export const INSCRIPTIONS_DEMANDE: string = INSCRIPTIONS + "/demande";
//LIEUX
    export const LIEUX: string = BASE + "/lieux";
    export const LIEUX_ID: string = LIEUX + "/{idLieu}";
//NIVEAUX
    export const NIVEAUX: string = BASE + "/niveaux";
    export const NIVEAUX_ID: string = NIVEAUX + "/{idNiveau}";
//PERSONNES
    export const PERSONNES: string = BASE + "/personnes";
    export const PERSONNES_ID: string = PERSONNES + "/{idPersonne}";
    export const PERSONNES_INSCRIPTIONS: string = PERSONNES_ID + "/inscriptions";
//PIECES_INSCRIPTION
    export const PIECES_INSCRIPTION: string = BASE + "/pieces_inscription";
    export const PIECES_INSCRIPTION_ID: string = PIECES_INSCRIPTION + "/{idPieceInscription}";
//RESPONSABLES
    export const RESPONSABLES: string = BASE + "/responsables";
    export const RESPONSABLES_ID: string = RESPONSABLES + "/{idResponsable}";
    export const RESPONSABLES_CRENEAUX: string = RESPONSABLES_ID + "/creneaux";
//SPORTS
    export const SPORTS: string = BASE + "/sports";
    export const SPORTS_ID: string = SPORTS + "/{idSport}";
    export const SPORTS_ACTIVITES: string = SPORTS_ID + "/activites";
    export const SPORTS_ACTUALITES: string = SPORTS_ID + "/actualites";
    export const SPORTS_CATEGORIES_SPORTS: string = SPORTS_ID + "/categories";
    export const SPORTS_CATEGORIES_SPORTS_ID: string = SPORTS_CATEGORIES_SPORTS + "/{idCategorieSport}";


}

export function makeUrl(url: string, pathVariable: any): string {
    const propertyNames = Object.getOwnPropertyNames(pathVariable);
    return propertyNames.reduce((previousValue, currentValue) => previousValue.replace('{' + currentValue + '}', pathVariable[currentValue]), url);
}