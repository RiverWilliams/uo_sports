import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionactivite',
	templateUrl: 'selectSuppressionActivite.html'
})
export class selectSuppressionActivitePage {

	selectSuppressionActivite = {
		choixSuppressionActivite: ''
	};

	liste = [
		'activite1',
		'activite2',
	];

	// Suppression d'activite
	constructor(public alertCtrl: AlertController) {}

	SupprActivite() {
		console.log(this.selectSuppressionActivite)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cette activité?',
			message: 'Ce sera irréversible! Si des étudiants sont encore inscrits ils seront perdus à jamais!',
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
