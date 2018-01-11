import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {FormControl} from "@angular/forms";

@Component({
	selector: 'page-selectsuppressioncategorietarif',
	templateUrl: 'selectSuppressionCategorieTarif.html'
})
export class selectSuppressionCategorieTarifPage {

	search = new FormControl();


	// Suppression d'activite
	constructor(public alertCtrl: AlertController) {

	}

	SupprimerCategorieTarifForm() {
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cette catégorie?',
			message: '',
			buttons: [
				{
					text: 'Annuler',
						handler: () => {
							console.log('Annuler clicked');
						}
				},
				{
					text: 'Ok',
						handler: () => {
							console.log('Ok clicked');
						}
				}
			]
		});
		alert.present();
	}
}
