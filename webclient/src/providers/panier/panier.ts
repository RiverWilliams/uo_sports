import {Injectable} from '@angular/core';
import {Creneau} from "../../common/model";
import {isUndefined} from "ionic-angular/util/util";
import {NavController} from "ionic-angular";
import {InscrPage} from "../../pages/home/inscr";

/*
  Generated class for the PanierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PanierProvider {

  //creneaux: Creneau[] = [];
    creneaux: Creneau[] = [
        {
            id: 0,
            jour: 1,
            heureDebut: new Date(),
            heureFin: new Date(),
            effectif: 20,
            activite: {id:3, nom:"athle"},
            lieu: {id:1, nom:"stade", adresse:"orleans", ville:"O"},
            niveau: {id:1,nom:"tous"},
            responsable: {id:1,nom:"queval", prenom:"N", email:"a"}
        },{
            id: 1,
            jour: 1,
            heureDebut: new Date(),
            heureFin: new Date(),
            effectif: 20,
            activite: {id:3, nom:"athle2"},
            lieu: {id:1, nom:"stade", adresse:"orleans", ville:"O"},
            niveau: {id:1,nom:"tous"},
            responsable: {id:1,nom:"queval", prenom:"N", email:"a"}
        },{
            id: 2,
            jour: 1,
            heureDebut: new Date(),
            heureFin: new Date(),
            effectif: 20,
            activite: {id:3, nom:"athle3"},
            lieu: {id:1, nom:"stade", adresse:"orleans", ville:"O"},
            niveau: {id:1,nom:"tous"},
            responsable: {id:1,nom:"queval", prenom:"N", email:"a"}
        }
    ];

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
