import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Creneau} from "../../model/Creneau";

@Component({
  selector: 'page-seance',
  templateUrl: 'seance.html'
})
export class SeancePage {

    public monParam;


creneaux: Creneau[] = [{
    id:0,
    jour:1,
    heureDebut: "12:20",
    heureFin: "13:00",
    effectif: 20,
    activite: {nom: "Athl�tisme"},
    lieu: {nom: "Stade de La Source"},
    niveau: {niveau: "Tous"},
    responsable: {nom: "QUEVAL"}
  },{
    id:1,
    jour:2,
    heureDebut: "12:20",
    heureFin: "13:00",
    effectif: 20,
    activite: {nom: "Athl�tisme"},
    lieu: {nom: "Stade de La Source"},
    niveau: {niveau: "Tous"},
    responsable: {nom: "QUEVAL"}
  },{
    id:2,
    jour:3,
    heureDebut: "12:20",
    heureFin: "13:00",
    effectif: 20,
    activite: {nom: "Athl�tisme"},
    lieu: {nom: "Stade de La Source"},
    niveau: {niveau: "Tous"},
    responsable: {nom: "QUEVAL"}
  },{
    id:3,
    jour:4,
    heureDebut: "12:20",
    heureFin: "13:30",
    effectif: 20,
    activite: {nom: "Athl�tisme"},
    lieu: {nom: "Stade de La Source"},
    niveau: {niveau: "Tous"},
    responsable: {nom: "QUEVAL"}
  }];




    constructor(public navCtrl: NavController, public navParams: NavParams){

        this.monParam = navParams.get("paramPasse");;
    }

}
