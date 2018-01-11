import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WebserviceProvider } from "../../common/webservice";

@Component({
	selector: 'page-listeEffectif',
	templateUrl: 'listeEffectif.html'
})

export class listeEffectifPage {
	public idCreneau;

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idCreneau = navParams.get("idCreneau");
	}

	ListeEffectifForm() {

	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}