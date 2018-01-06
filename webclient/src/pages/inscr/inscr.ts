import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Creneau, Personne} from "../../common/model";


@Component({
  selector: 'page-inscr',
  templateUrl: 'inscr.html'
})
export class InscrPage {

  public mesParam: Creneau[];

    public inscrit: Personne;

    constructor(public  navCtrl: NavController, public navParams: NavParams) {

        this.mesParam = navParams.get("paramPasse");

    }

    inscr = {
      catPersonne : '',
      nomI : '',
      prenomI : '',
      adresseI : '',
      telephoneI : '',
      mailI : '',
    };

    inscriptionForm(){
      console.log(this.inscr);
      //this.inscrit.nom = this.inscr.nomI;
      //console.log(this.inscrit.nom);
    };


    inscrire(nom, prenom, adresse, telephone, mail){
      this.inscrit.nom = this.inscr.nomI;
      this.inscrit.prenom = this.inscr.prenomI;
      this.inscrit.adresse = this.inscr.adresseI;
      this.inscrit.telephone = this.inscr.telephoneI;
      this.inscrit.email = this.inscr.mailI;
      this.inscrit.categoriePersonne = this.inscr.catPersonne;
    }


}
