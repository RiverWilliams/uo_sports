import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { desinscriptionPersonnePage } from '../desinscriptionPersonne/desinscriptionPersonne';

@Component({
	selector: 'page-selectdesinscriptionpersonne',
	templateUrl: 'selectDesinscriptionPersonne.html'
})
export class selectDesinscriptionPersonnePage {

	constructor(public navCtrl: NavController) {

	}

	selectDesinscriptionPersonne = {
		choixDesinscriptionPersonne: ''
	};

	listePersonne = [
		'andré',
		'martin',
		'sophie',
		'bacassine',
		'denis',
		'john'
	];

	SelectDesinscriptionPersonne() {
		console.log("Selected Item", this.selectDesinscriptionPersonne);
		console.log(this.selectDesinscriptionPersonne.choixDesinscriptionPersonne);
		this.navCtrl.push(desinscriptionPersonnePage, {listePersonne: this.selectDesinscriptionPersonne.choixDesinscriptionPersonne});
	}

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listePersonne = this.listePersonne.filter(function(personne) {
				return personne.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

}
