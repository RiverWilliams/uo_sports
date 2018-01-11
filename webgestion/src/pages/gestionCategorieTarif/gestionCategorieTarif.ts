import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-gestioncategorietarif',
	templateUrl: 'gestionCategorieTarif.html'
})

export class gestionCategorieTarifPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){

	}



	GestionCategorieTarifForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
