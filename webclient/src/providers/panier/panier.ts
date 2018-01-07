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
            if (typeof value.creneau != "number")
                return value.creneau.id === id;
            else return value.creneau === id;
        }));
    }

    ajouter(creneau: Creneau) {
        this.inscriptions.push({creneau: creneau, nombreHeures: 0, demande: false, enAttente: true, ects: 0});
    }

    supprimer(id: number | Creneau) {
        if (typeof id != "number")
            id = id.id;
        const index = this.inscriptions.findIndex(value => {
            if (typeof value.creneau != "number")
                return value.creneau.id === id;
            else return value.creneau === id;
        });
        if (index >= 0)
            this.inscriptions.splice(index, 1);
    }
}
