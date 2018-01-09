import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressioncategorie',
	templateUrl: 'selectSuppressionCategorie.html'
})
export class selectSuppressionCategoriePage {

	selectSuppressionCategorie = {
		choixSuppressionCategorie: ''
	};

	listeCategorie = [
		'Eau',
		'Pied',
		'Collectif',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeCategorie = this.listeCategorie.filter(function(categorie) {
				return categorie.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'une catégorie
	constructor(public alertCtrl: AlertController) {}

	SupprimerCategorie() {
		console.log(this.selectSuppressionCategorie)
		console.log(this.selectSuppressionCategorie.choixSuppressionCategorie)
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
