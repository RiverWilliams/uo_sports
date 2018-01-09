import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionpersonne',
	templateUrl: 'selectSuppressionPersonne.html'
})
export class selectSuppressionPersonnePage {

	selectSuppressionPersonne = {
		choixSuppressionPersonne: ''
	};

	listePersonne = [
		'andré',
		'martin',
		'sophie',
		'bacassine',
		'denis',
		'john'
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listePersonne = this.listePersonne.filter(function(personne) {
				return personne.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'une personne
	constructor(public alertCtrl: AlertController) {}

	SuppressionPersonne() {
		console.log(this.selectSuppressionPersonne)
		console.log(this.selectSuppressionPersonne.choixSuppressionPersonne)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cette personne?',
			message: 'Avez-vous vérifié s\'elle n\'est pas encore inscrite dans une activité?',
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
