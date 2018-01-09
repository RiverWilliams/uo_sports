import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationcreneau',
	templateUrl: 'modificationCreneau.html'
})

export class modificationCreneauPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	modificationCreneau = {
		nomActivite: '',
		nomCreneau: '',
		responsableCreneau: '',
		jourCreneau: '',
		heureDebutCreneau: '',
		heureFinCreneau: '',
		effectifCreneau: '',
		lieuCreneau: '',
	};

	modificationCreneauForm() {
		console.log(this.modificationCreneau)
	};

	listeActivite = [
		'Natation',
		'Foot',
		'Course'
	];

	items1 = [
		'Natation',
		'Dupond',
		'Lundi',
		'13/00',
		'15/00',
		'20',
		'Piscine'
	];

	goback() {
		this.navCtrl.push(HomePage);
	}
}
