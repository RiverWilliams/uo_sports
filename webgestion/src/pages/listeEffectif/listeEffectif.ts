import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {WebserviceProvider} from "../../common/webservice";
import {Inscription} from "../../common/model";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-listeEffectif',
  templateUrl: 'listeEffectif.html'
})

export class listeEffectifPage implements OnInit {
  ngOnInit(): void {
    this.web.creneaux.getInscrits(this.idCreneau).subscribe(d => this.inscriptions = d.sort(Comparateur.Inscription.personneNomPrenom));
  }

  public idCreneau;

  inscriptions: Inscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider) {
    this.idCreneau = navParams.get("idCreneau");
  }

  goback() {
    this.navCtrl.push(HomePage);
  }
}
