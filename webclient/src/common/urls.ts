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


}

export function makeUrl(url: string, pathVariable: any): string {
    const propertyNames = Object.getOwnPropertyNames(pathVariable);
    return propertyNames.reduce((previousValue, currentValue) => previousValue.replace('{' + currentValue + '}', pathVariable[currentValue]), url);
}