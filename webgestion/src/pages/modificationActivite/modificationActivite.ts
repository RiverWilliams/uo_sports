import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationActivite',
	templateUrl: 'modificationActivite.html'
})

export class modificationActivitePage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("hello");
		console.log(this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	modificationActivite = {
		nomActivite: '',
		responsableActivite: '',
		jourActivite: '',
		heureDebutActivite: '',
		heureFinActivite: '',
		effectifActivite: '',
		lieuActivite: '',
	};

	modificationActiviteForm() {
		console.log(this.modificationActivite)
	};

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
