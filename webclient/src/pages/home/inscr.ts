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
        ;
    }

    inscrire(){
      //this.inscrit.nom = ;
    }
}
