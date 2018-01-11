import {Injectable} from '@angular/core';
import {Creneau, Inscription} from "../../common/model";
import {isUndefined} from "ionic-angular/util/util";

/*
  Generated class for the PanierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PanierProvider {

    inscriptions: Inscription[] = [];

    constructor() {

    }

    contient(id: number): boolean {
        return !isUndefined(this.inscriptions.find((value) => {
            return value.creneau.id === id;
        }));
    }

    ajouter(creneau: Creneau) {
        this.inscriptions.push({creneau: creneau, nombreHeures: 0, demande: false, enAttente: true, ects: 0,personne:null});
    }

    supprimer(id: number) {
        const index = this.inscriptions.findIndex(value => {
            return value.creneau.id === id;
        });
        if (index >= 0)
            this.inscriptions.splice(index, 1);
    }
}
