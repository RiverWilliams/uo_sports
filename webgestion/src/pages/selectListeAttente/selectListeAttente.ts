import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { listeAttentePage } from '../listeAttente/listeAttente';

@Component({
	selector: 'page-selectlisteattente',
	templateUrl: 'selectListeAttente.html'
})
export class selectListeAttentePage {
	constructor(public navCtrl: NavController) {

	}

	selectListeAttente = {
		choixListeAttente: ''
	};

	liste = [
		'activite1',
		'activite2',
	];

	testfunc() {
		this.navCtrl.push(listeAttentePage, {liste: this.selectListeAttente.choixListeAttente});
		console.log(this.selectListeAttente);
		
	};
}
