import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressioncategorietarif',
	templateUrl: 'selectSuppressionCategorieTarif.html'
})
export class selectSuppressionCategorieTarifPage {

	selectSuppressionCategorieTarif = {
		choixSuppressionCategorieTarif: ''
	};

	listeCategorie = [
		'Étudiant, IRFMK, Psychomotricité, Infirmières',
		'Personnel de l\'Université',
		'Personnel du CROUS / Radio Campus',
		'Personnel du CNRS / DREAL / CCNO',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeCategorie = this.listeCategorie.filter(function(categorie) {
				return categorie.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'activite
	constructor(public alertCtrl: AlertController) {}

	SupprimerCategorieTarifForm() {
		console.log(this.selectSuppressionCategorieTarif)
		console.log(this.selectSuppressionCategorieTarif.choixSuppressionCategorieTarif)
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
