import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { selectListeEffectifCreneauPage } from '../selectListeEffectifCreneau/selectListeEffectifCreneau';

@Component({
	selector: 'page-selectlisteeffectif',
	templateUrl: 'selectListeEffectif.html'
})
export class selectListeEffectifPage {
	constructor(public navCtrl: NavController) {

	}

	selectListeEffectif = {
		choixListeEffectif: ''
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

	ListeEffectif() {
		console.log(this.selectListeEffectif);
		console.log(this.selectListeEffectif.choixListeEffectif);
		this.navCtrl.push(selectListeEffectifCreneauPage, {liste: this.selectListeEffectif.choixListeEffectif});
	};
}
