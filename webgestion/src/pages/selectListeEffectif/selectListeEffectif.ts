import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { listeEffectifPage } from '../listeEffectif/listeEffectif';

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

	liste = [
		'activite1',
		'activite2',
	];

	testfunc() {
		this.navCtrl.push(listeEffectifPage, {liste: this.selectListeEffectif.choixListeEffectif});
		console.log(this.selectListeEffectif);
		
	};
}
