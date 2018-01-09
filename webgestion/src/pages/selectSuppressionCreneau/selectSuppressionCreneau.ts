import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressioncreneau',
	templateUrl: 'selectSuppressionCreneau.html'
})
export class selectSuppressionCreneauPage {

	selectSuppressionCreneau = {
		choixSuppressionCreneau: ''
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

	// Suppression d'un creneau
	constructor(public alertCtrl: AlertController) {}

	SupprimerCreneau() {
		console.log(this.selectSuppressionCreneau)
		console.log(this.selectSuppressionCreneau.choixSuppressionCreneau)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer ce créneau?',
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
