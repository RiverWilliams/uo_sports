import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionetudiant',
	templateUrl: 'selectSuppressionEtudiant.html'
})
export class selectSuppressionEtudiantPage {

	selectSuppressionEtudiant = {
		choixSuppressionEtudiant: ''
	};

	listeEtudiant = [
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
			this.listeEtudiant = this.listeEtudiant.filter(function(etudiant) {
				return etudiant.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'un etudiant
	constructor(public alertCtrl: AlertController) {}

	SuppressionEtudiant() {
		console.log(this.selectSuppressionEtudiant)
		console.log(this.selectSuppressionEtudiant.choixSuppressionEtudiant)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cet étudiant?',
			message: 'Avez-vous vérifié s\'il n\'est pas encore étudiant dans une activité?',
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
