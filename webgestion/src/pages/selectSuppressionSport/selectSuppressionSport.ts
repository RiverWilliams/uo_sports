import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionsport',
	templateUrl: 'selectSuppressionSport.html'
})
export class selectSuppressionSportPage {

	selectSuppressionSport = {
		choixSuppressionSport: ''
	};

	listeSport = [
		'Athlétisme',
		'Gymnastique'
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeSport = this.listeSport.filter(function(sport) {
				return sport.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'une Sport
	constructor(public alertCtrl: AlertController) {}

	SupprimerSport() {
		console.log(this.selectSuppressionSport)
		console.log(this.selectSuppressionSport.choixSuppressionSport)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer ce sport?',
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
