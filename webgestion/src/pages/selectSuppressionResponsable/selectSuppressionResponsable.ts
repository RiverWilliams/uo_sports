import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionresponsable',
	templateUrl: 'selectSuppressionResponsable.html'
})
export class selectSuppressionResponsablePage {

	// Suppression d'un responsable
	constructor(public alertCtrl: AlertController) {
		
	}

	SuppressionResponsable() {
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer ce responsable?',
			message: 'Avez-vous vérifié s\'il n\'est pas encore responsable d\'une activité?',
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
