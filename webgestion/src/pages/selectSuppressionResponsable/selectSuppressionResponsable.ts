import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionresponsable',
	templateUrl: 'selectSuppressionResponsable.html'
})
export class selectSuppressionResponsablePage {

	selectSuppressionResponsable = {
		choixSuppressionResponsable: ''
	};

	listeResponsable = [
		'xxxxx',
		'Metroixxxxxd',
		'Megxxxxa Mxxxxan',
		'Txxxxxhe Legxxxxxend of Zelda',
		'Paxxxc-Man',
		'GTA',
		'Halo'
	];

	// Suppression d'un responsable
	constructor(public alertCtrl: AlertController) {}

	SuppressionResponsable() {
		console.log(this.selectSuppressionResponsable)
		console.log(this.selectSuppressionResponsable.choixSuppressionResponsable)
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

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeResponsable = this.listeResponsable.filter(function(responsable) {
				return responsable.toLowerCase().includes(val.toLowerCase());
			});
		}
	}
}
