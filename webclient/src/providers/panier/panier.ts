import {Injectable} from '@angular/core';
import {Creneau} from "../../common/model";
import {isUndefined} from "ionic-angular/util/util";

/*
  Generated class for the PanierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PanierProvider {

  creneaux: Creneau[] = [];

  constructor(){

  }

  contient(id: number): boolean {
    return !isUndefined(this.creneaux.find((creneau) => creneau.id == id));
  }

  ajouter(creneau: Creneau) {
    this.creneaux.push(creneau);
  }

  supprimer(creneau: Creneau){
    this.creneaux.splice(this.creneaux.indexOf(creneau),1);
  }
}
