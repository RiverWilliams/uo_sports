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

	listeActivite = [
		'Natation',
		'Foot',
		'Course',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeActivite = this.listeActivite.filter(function(activite) {
				return activite.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'activite
	constructor(public alertCtrl: AlertController) {}

	SupprimerActivite() {
		console.log(this.selectSuppressionActivite)
		console.log(this.selectSuppressionActivite.choixSuppressionActivite)
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
