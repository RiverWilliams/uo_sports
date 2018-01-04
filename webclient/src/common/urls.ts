export namespace Urls {
    export const BASE: string = "http://localhost:8080/sports";
    export const CRENEAUX: string = BASE + "/creneaux";
    export const CRENEAUX_ID: string = CRENEAUX + "/{idCreneau}";
    export const CRENEAUX_EN_ATTENTES: string = CRENEAUX_ID + "/en_attentes";
    export const CRENEAUX_INSCRITS: string = CRENEAUX_ID + "/inscrits";


}

export function makeUrl(url: string, pathVariable: any): string {
    const propertyNames = Object.getOwnPropertyNames(pathVariable);
    return propertyNames.reduce((previousValue, currentValue) => previousValue.replace('{' + currentValue + '}', pathVariable[currentValue]), url);
}