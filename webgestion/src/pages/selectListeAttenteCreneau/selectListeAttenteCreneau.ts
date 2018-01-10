import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { listeAttentePage } from '../listeAttente/listeAttente';

@Component({
	selector: 'page-selectlisteattentecreneau',
	templateUrl: 'selectListeAttenteCreneau.html'
})

export class selectListeAttenteCreneauPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste des Creneaux suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	listeCreneau1 = [
		'lundi 8h',
		'mercredi 12h'
	];

	selectlisteCreneau = {
		choixSelectListeCreneau : ''
	};

	SelectListeCreneauForm() {
		console.log("Selected Item", this.selectlisteCreneau);
		console.log(this.selectlisteCreneau.choixSelectListeCreneau);
		this.navCtrl.push(listeAttentePage, {liste: this.selectlisteCreneau.choixSelectListeCreneau});
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
