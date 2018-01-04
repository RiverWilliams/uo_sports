import {Activite, Creneau, Lieu, Niveau, Responsable} from "./model";

export interface CreneauJSON {
    activite: Activite | { id: number };
    effectif: number;
    heureDebut: string;
    heureFin: string;
    id?: number;
    jour: number;
    lieu: Lieu | { id: number };
    niveau: Niveau | { id: number };
    responsable: Responsable | { id: number };
}

export namespace AdaptaeurActualite {
    function dateToString(d: Date): string {
        const fullYear = d.getFullYear();
        const zero = Math.ceil(3 - Math.log10(d.getFullYear()));
        let a = fullYear.toString();
        for (let i = 0; i < zero; i++)
            a = "0" + a;
        const m = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth();
        const j = d.getDay() < 10 ? "0" + d.getDay() : d.getDay();
        return a + "-" + m + "-" + j;
    }

    function stringToDate(s: string): Date {
        const regExp = RegExp("^\\d?\\d-\\d?\\d-\\d?\\d$");
        if (!regExp.test(s)) {
            throw new Error("Le format doit correspondre à " + regExp.source)
        }
        const split = s.split("-");
        let date = new Date();
        date.setFullYear(+split[0], +split[1], +split[2]);
        return date;
    }
}

export namespace AdaptaeurCreneau {

    function stringFromDate(d: Date): string {
        const h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        const m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        const s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        return h + ":" + m + ":" + s;
    }

    function stringToDate(s: string): Date {
        const regExp = RegExp("^\\d?\\d:\\d?\\d:\\d?\\d$");
        if (!regExp.test(s)) {
            throw new Error("Le format doit correspondre à " + regExp.source)
        }
        const split = s.split(":");
        let date = new Date();
        date.setHours(+split[0], +split[1], +split[2]);
        return date;
    }

    export function toJSON(c: Creneau): CreneauJSON {
        return {
            id: c.id,
            jour: c.jour,
            responsable: (typeof c.responsable === "number") ? {id: c.responsable} : c.responsable,
            niveau: (typeof c.niveau === "number") ? {id: c.niveau} : c.niveau,
            lieu: (typeof c.lieu === "number") ? {id: c.lieu} : c.lieu,
            effectif: c.effectif,
            activite: (typeof c.activite === "number") ? {id: c.activite} : c.activite,
            heureDebut: stringFromDate(c.heureDebut),
            heureFin: stringFromDate(c.heureFin)
        };
    }

    export function fromJSON(c: CreneauJSON): Creneau {
        return {
            id: c.id,
            jour: c.jour,
            responsable: <Responsable>c.responsable,
            niveau: <Niveau>c.niveau,
            lieu: <Lieu>c.lieu,
            effectif: c.effectif,
            activite: <Activite>c.activite,
            heureDebut: stringToDate(c.heureDebut),
            heureFin: stringToDate(c.heureFin)
        };
    }

}