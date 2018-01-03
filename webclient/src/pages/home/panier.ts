import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscrPage } from './inscr';
import {Creneau} from "../../model/Creneau";
import {PanierProvider} from "../../providers/panier/panier";


@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html'
})
export class PanierPage {

   @Input() creneaux: Creneau[] = [{
        id:0,
        jour:1,
        heureDebut: "12:20",
        heureFin: "13:00",
        effectif: 20,
        activite: {nom: "Athletisme"},
        lieu: {nom: "Stade de La Source"},
        niveau: {niveau: "Tous"},
        responsable: {nom: "QUEVAL"}
    },{
        id:1,
        jour:2,
        heureDebut: "12:20",
        heureFin: "13:00",
        effectif: 20,
        activite: {nom: "Badminton"},
        lieu: {nom: "Stade de La Source"},
        niveau: {niveau: "Tous"},
        responsable: {nom: "QUEVAL"}
    },{
        id:2,
        jour:3,
        heureDebut: "12:20",
        heureFin: "13:00",
        effectif: 20,
        activite: {nom: "Velo"},
        lieu: {nom: "Stade de La Source"},
        niveau: {niveau: "Tous"},
        responsable: {nom: "QUEVAL"}
    },{
        id:3,
        jour:4,
        heureDebut: "12:20",
        heureFin: "13:30",
        effectif: 20,
        activite: {nom: "Dance"},
        lieu: {nom: "Stade de La Source"},
        niveau: {niveau: "Tous"},
        responsable: {nom: "QUEVAL"}
    }];


    public page : any;
  constructor(public navCtrl: NavController,private panier: PanierProvider) {
		this.page = InscrPage;
  }


    supprimer(creneau: Creneau): void {
        this.panier.supprimer(creneau);

    }

}
