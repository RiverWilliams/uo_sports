import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { selectListeAttenteCreneauPage } from '../selectListeAttenteCreneau/selectListeAttenteCreneau';

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

	listeActivite = [
		'activite1',
		'activite2',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeActivite = this.listeActivite.filter(function(activite) {
				return activite.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	ListeAttente() {
		console.log(this.selectListeAttente);
		console.log(this.selectListeAttente.choixListeAttente);
		this.navCtrl.push(selectListeAttenteCreneauPage, {liste: this.selectListeAttente.choixListeAttente});		
	};
}
