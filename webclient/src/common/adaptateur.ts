import {Activite, Actualite, Creneau, Inscription, Lieu, Niveau, Personne, Responsable} from "./model";

export interface CreneauJSON {
    activite: Activite;
    effectif: number;
    heureDebut: string;
    heureFin: string;
    id?: number;
    jour: number;
    lieu: Lieu;
    niveau: Niveau;
    responsable: Responsable;
}

export interface ActualiteJSON {
    dateDebut: string;
    dateFin: string;
    dateMiseEnLigne: string;
    descCourte: string;
    descLongue: string;
    id?: number;
    image: string;
    titre: string;
}

export interface InscriptionJSON {
    personne?: Personne;
    demande: boolean;
    ects: number;
    enAttente: boolean;
    nombreHeures: number;
    creneau?: CreneauJSON;
}

export namespace Adaptateur {
    export namespace Inscription {
        export function toJSON(inscription: Inscription): InscriptionJSON {
            return {
                personne: inscription.personne,
                creneau: Creneau.toJSON(inscription.creneau),
                demande: inscription.demande,
                enAttente: inscription.enAttente,
                nombreHeures: inscription.nombreHeures,
                ects: inscription.ects
            };
        }

        export function fromJSON(inscription: InscriptionJSON): Inscription {
            return {
                personne: inscription.personne,
                creneau: Creneau.fromJSON(<CreneauJSON>inscription.creneau),
                demande: inscription.demande,
                enAttente: inscription.enAttente,
                nombreHeures: inscription.nombreHeures,
                ects: inscription.ects
            };
        }
    }

    export function dateToString(d: Date): string {
        const fullYear = d.getFullYear();
        const zero = Math.ceil(3 - Math.log10(d.getFullYear()));
        let a = fullYear.toString();
        for (let i = 0; i < zero; i++)
            a = "0" + a;
        const m = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth();
        const j = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        return a + "-" + m + "-" + j;
    }

    export function stringToDate(s: string): Date {
        const regExp = RegExp("^\\d{1,4}-\\d?\\d-\\d?\\d$");
        if (!regExp.test(s)) {
            throw new Error("Le format doit correspondre à " + regExp.source)
        }
        const split = s.split("-");
        let date = new Date();
        date.setFullYear(+split[0], +split[1], +split[2]);
        return date;
    }

    export namespace Actualite {


        export function toJSON(actualite: Actualite): ActualiteJSON {
            return {
                id: actualite.id,
                titre: actualite.titre,
                image: actualite.image,
                descCourte: actualite.descCourte,
                descLongue: actualite.descLongue,
                dateDebut: dateToString(actualite.dateDebut),
                dateFin: dateToString(actualite.dateFin),
                dateMiseEnLigne: dateToString(actualite.dateMiseEnLigne)
            };
        }

        export function fromJSON(actualite: ActualiteJSON): Actualite {
            return {
                id: actualite.id,
                titre: actualite.titre,
                image: actualite.image,
                descCourte: actualite.descCourte,
                descLongue: actualite.descLongue,
                dateDebut: stringToDate(actualite.dateDebut),
                dateFin: stringToDate(actualite.dateFin),
                dateMiseEnLigne: stringToDate(actualite.dateMiseEnLigne)
            };
        }


    }

    export function timeToString(d: Date): string {
        const h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        const m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        const s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        return h + ":" + m + ":" + s;
    }

    export function stringToTime(s: string): Date {
        const regExp = RegExp("^\\d?\\d:\\d?\\d:\\d?\\d$");
        if (!regExp.test(s)) {
            throw new Error("Le format doit correspondre à " + regExp.source)
        }
        const split = s.split(":");
        let date = new Date();
        date.setHours(+split[0], +split[1], +split[2]);
        return date;
    }

    export namespace Creneau {

        export function toJSON(c: Creneau): CreneauJSON {
            return {
                id: c.id,
                jour: c.jour,
                responsable: c.responsable,
                niveau: c.niveau,
                lieu: c.lieu,
                effectif: c.effectif,
                activite: c.activite,
                heureDebut: timeToString(c.heureDebut),
                heureFin: timeToString(c.heureFin)
            };
        }

        export function fromJSON(c: CreneauJSON): Creneau {
            return {
                id: c.id,
                jour: c.jour,
                responsable: c.responsable,
                niveau: c.niveau,
                lieu: c.lieu,
                effectif: c.effectif,
                activite: c.activite,
                heureDebut: stringToTime(c.heureDebut),
                heureFin: stringToTime(c.heureFin)
            };
        }

    }
}
