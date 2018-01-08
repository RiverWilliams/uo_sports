import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionlieu',
	templateUrl: 'selectSuppressionLieu.html'
})
export class selectSuppressionLieuPage {

	selectSuppressionLieu = {
		choixSuppressionLieu: ''
	};

	listeLieu = [
		'Gymnase',
		'Stage',
		'Piscine',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeLieu = this.listeLieu.filter(function(lieu) {
				return lieu.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'un lieu
	constructor(public alertCtrl: AlertController) {}

	SupprimerLieu() {
		console.log(this.selectSuppressionLieu)
		console.log(this.selectSuppressionLieu.choixSuppressionLieu)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cette activité?',
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
