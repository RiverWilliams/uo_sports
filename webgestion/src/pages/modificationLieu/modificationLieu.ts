import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationLieu',
	templateUrl: 'modificationLieu.html'
})

export class modificationLieuPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	// Modification d'un lieu
	modificationLieu = {
		nomLieu: '',
		adresseLieu: '',
		villeLieu: '',
	};

	modificationLieuForm() {
		console.log(this.modificationLieu)
	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
