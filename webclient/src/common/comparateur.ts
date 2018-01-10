import {Activite, Actualite, CategorieSport, Creneau, Lieu, Niveau, Responsable, Sport} from "./model";

export namespace Comparateur {
    export namespace Activite {
        export function nom(a: Activite, b: Activite): number {
            return a.nom.localeCompare(b.nom);
        }
    }

    export namespace Creneau {

        export function activite(a: Creneau, b: Creneau): number {
            return Activite.nom(a.activite, b.activite);
        }

        export function activiteChronologique(a: Creneau, b: Creneau): number {
            const ac = activite(a, b);
            if (ac != 0) {
                return ac;
            }
            return chronologique(a, b);
        }

        export function ville(a: Creneau, b: Creneau): number {
            return Lieu.ville(a.lieu, b.lieu);
        }

        export function jour(a: Creneau, b: Creneau): number {
            return a.jour - b.jour;
        }

        export function debut(a: Creneau, b: Creneau): number {
            return a.heureDebut.getTime() - b.heureDebut.getTime();
        }

        export function chronologique(a: Creneau, b: Creneau): number {
            const j = jour(a, b);
            if (j != 0) {
                return j;
            }
            return debut(a, b);
        }

        export function villeChronologique(a: Creneau, b: Creneau): number {
            const v = ville(a, b);
            if (v != 0) {
                return v;
            }
            return chronologique(a, b);
        }


    }

    export namespace Lieu {
        export function ville(a: Lieu, b: Lieu): number {
            return a.ville.localeCompare(b.ville);
        }
    }

    export namespace CategorieSport {
        export function nom(a: CategorieSport, b: CategorieSport): number {
            return a.nom.localeCompare(b.nom);
        }
    }

    export namespace Actualite {
        export function debut(a: Actualite, b: Actualite): number {
            return a.dateDebut.getDate() - b.dateDebut.getDate();
        }

        export function fin(a: Actualite, b: Actualite): number {
            return a.dateFin.getDate() - b.dateFin.getDate();
        }

        export function miseEnLigne(a: Actualite, b: Actualite): number {
            return a.dateMiseEnLigne.getDate() - b.dateMiseEnLigne.getDate();
        }
    }

    export namespace Sport {
        export function nom(a: Sport, b: Sport): number {
            return a.nom.localeCompare(b.nom);
        }
    }

    export namespace Responsable {
        export function nom(a: Responsable, b: Responsable): number {
            return a.nom.localeCompare(b.nom);
        }

        export function prenom(a: Responsable, b: Responsable): number {
            return a.prenom.localeCompare(b.prenom);
        }

        export function nomPrenom(a: Responsable, b: Responsable): number {
            const n = nom(a, b);
            if (n != 0) {
                return n;
            }
            return prenom(a, b);
        }
    }

    export namespace Niveau {
        export function nom(a: Niveau, b: Niveau): number {
            return a.nom.localeCompare(b.nom);
        }
    }

}