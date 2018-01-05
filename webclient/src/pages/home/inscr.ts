import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Creneau, Personne} from "../../common/model";


@Component({
  selector: 'page-inscr',
  templateUrl: 'inscr.html'
})
export class InscrPage {

  public mesParam: Creneau[];

    private inscrit: Personne;

    constructor(public  navCtrl: NavController, public navParams: NavParams) {

        this.mesParam = navParams.get("paramPasse");

    }



    inscrire(nom, prenom, adresse, telephone, mail){
      this.inscrit.nom = nom;
      this.inscrit.prenom = prenom;
      this.inscrit.adresse = adresse;
      this.inscrit.telephone = telephone;
      this.inscrit.email = mail;
      this.inscrit.categoriePersonne = 1;
    }


}
