import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-desinscriptionetudiant',
	templateUrl: 'desinscriptionEtudiant.html'
})

export class desinscriptionEtudiantPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	listeActivite = [
		'Natation',
		'Foot'
	];

	desinscriptionEtudiant = {
		nomActivite: ''
	};

	DesinscriptionEtudiantForm() {
		console.log("Selected Item", this.desinscriptionEtudiant);
		console.log(this.desinscriptionEtudiant.nomActivite);
	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
