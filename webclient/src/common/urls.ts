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


}

export function makeUrl(url: string, pathVariable: any): string {
    const propertyNames = Object.getOwnPropertyNames(pathVariable);
    return propertyNames.reduce((previousValue, currentValue) => previousValue.replace('{' + currentValue + '}', pathVariable[currentValue]), url);
}