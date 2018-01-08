import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationsport',
	templateUrl: 'modificationSport.html'
})

export class modificationSportPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	// Modification d'un sport
	modificationSport = {
		nom: ''
	};

	modificationSportForm() {
		console.log(this.modificationSport)
	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
