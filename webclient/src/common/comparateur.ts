import {Activite, Creneau, Lieu} from "./model";

export namespace Comparateur {
    export namespace Activite {
        export function nom(a: Activite, b: Activite): number {
            return a.nom.localeCompare(b.nom);
        }
    }

    export namespace Creneau {
        export function ville(a: Creneau, b: Creneau): number {
            return Lieu.ville(<Lieu>a.lieu, <Lieu>b.lieu);
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

        export namespace Lieu {
            export function ville(a: Lieu, b: Lieu): number {
                return a.ville.localeCompare(b.ville);
            }
        }
    }
}