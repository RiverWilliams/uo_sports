import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { verificationResponsablePage } from '../verificationResponsable/verificationResponsable';

@Component({
	selector: 'page-selectverificationresponsable',
	templateUrl: 'selectVerificationResponsable.html'
})
export class selectVerificationResponsablePage {
	constructor(public navCtrl: NavController) {

	}

	//Vérification d'un responsable
	listeResponsable = [
		'Orange',
		'Banana',
		'Pear',
		'Tomato',
		'Grape',
		'Apple',
		'Cherries',
		'Cranberries',
		'Raspberries',
		'Strawberries',
		'Watermelon'
	];

	verifResponsable = {
		choixVerifResponsable: ''
	};
	
	VerifResponsableForm() {
		console.log("Selected Item", this.verifResponsable);
		console.log(this.verifResponsable.choixVerifResponsable);
		this.navCtrl.push(verificationResponsablePage, {liste: this.verifResponsable.choixVerifResponsable});
	}

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeResponsable = this.listeResponsable.filter(function(responsable) {
				return responsable.toLowerCase().includes(val.toLowerCase());
			});
		}
	}
}
