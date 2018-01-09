import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationCreneauPage } from '../modificationCreneau/modificationCreneau';

@Component({
	selector: 'page-selectmodificationcreneau',
	templateUrl: 'selectModificationCreneau.html'
})

export class selectModificationCreneauPage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationCreneau = {
		choixModificationCreneau: ''
	};

	listeCreneau = [
		'Natation',
		'Foot',
		'Course',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeCreneau = this.listeCreneau.filter(function(creneau) {
				return creneau.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationCreneau() {
		console.log(this.selectModificationCreneau);
		console.log(this.selectModificationCreneau.choixModificationCreneau);
		this.navCtrl.push(modificationCreneauPage, {liste: this.selectModificationCreneau.choixModificationCreneau});		
	};
}
