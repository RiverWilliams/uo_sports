import {
    Activite, Creneau, Lieu, Niveau, Responsable, Actualite, Personne, Inscription,
    CategoriePersonne
} from "./model";

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
    personne?: Personne | { id: number };
    demande: boolean;
    ects: number;
    enAttente: boolean;
    nombreHeures: number;
    creneau?: CreneauJSON | { id: number };
}

export interface PersonneJSON {
    adresse: string;
    categoriePersonne: CategoriePersonne | { id: number };
    email: string;
    id?: number;
    nom: string;
    prenom: string;
    telephone: string;
}

export namespace AdaptateurPersonne {
    export function toJSON(personne: Personne): PersonneJSON {
        return {
            categoriePersonne: (typeof personne.categoriePersonne === "number") ? {id: personne.categoriePersonne} : personne.categoriePersonne,
            id: personne.id,
            prenom: personne.prenom,
            email: personne.email,
            nom: personne.nom,
            telephone: personne.telephone,
            adresse: personne.adresse
        };
    }

    export function fromJSON(personne: PersonneJSON): Personne {
        return {
            categoriePersonne: <CategoriePersonne>personne.categoriePersonne,
            id: personne.id,
            prenom: personne.prenom,
            email: personne.email,
            nom: personne.nom,
            telephone: personne.telephone,
            adresse: personne.adresse
        };
    }
}

export namespace AdaptateurInscription {
    export function toJSON(inscription: Inscription): InscriptionJSON {
        return {
            personne: (typeof inscription.personne === "number") ? {id: inscription.personne} : inscription.personne,
            creneau: (typeof inscription.creneau === "number") ? {id: inscription.creneau} : AdaptateurCreneau.toJSON(inscription.creneau),
            demande: inscription.demande,
            enAttente: inscription.enAttente,
            nombreHeures: inscription.nombreHeures,
            ects: inscription.ects
        };
    }

    export function fromJSON(inscription: InscriptionJSON): Inscription {
        return {
            personne: <Personne>inscription.personne,
            creneau: AdaptateurCreneau.fromJSON(<CreneauJSON>inscription.creneau),
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
    const j = d.getDay() < 10 ? "0" + d.getDay() : d.getDay();
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

export namespace AdaptateurActualite {


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

export namespace AdaptateurCreneau {


    export function toJSON(c: Creneau): CreneauJSON {
        return {
            id: c.id,
            jour: c.jour,
            responsable: (typeof c.responsable === "number") ? {id: c.responsable} : c.responsable,
            niveau: (typeof c.niveau === "number") ? {id: c.niveau} : c.niveau,
            lieu: (typeof c.lieu === "number") ? {id: c.lieu} : c.lieu,
            effectif: c.effectif,
            activite: (typeof c.activite === "number") ? {id: c.activite} : c.activite,
            heureDebut: timeToString(c.heureDebut),
            heureFin: timeToString(c.heureFin)
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
            heureDebut: stringToTime(c.heureDebut),
            heureFin: stringToTime(c.heureFin)
        };
    }

}