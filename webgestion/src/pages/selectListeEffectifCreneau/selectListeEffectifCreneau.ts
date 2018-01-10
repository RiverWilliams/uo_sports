import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { listeEffectifPage } from '../listeEffectif/listeEffectif';

@Component({
	selector: 'page-selectlisteeffectifcreneau',
	templateUrl: 'selectListeEffectifCreneau.html'
})

export class selectListeEffectifCreneauPage {
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
		this.navCtrl.push(listeEffectifPage, {liste: this.selectlisteCreneau.choixSelectListeCreneau});
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
