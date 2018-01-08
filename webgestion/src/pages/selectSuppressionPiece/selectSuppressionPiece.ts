import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-selectsuppressionpiece',
	templateUrl: 'selectSuppressionPiece.html'
})
export class selectSuppressionPiecePage {

	selectSuppressionPiece = {
		choixSuppressionPiece: ''
	};

	listePiece = [
		'Le bulletin d\'adhésion',
		'Un justificatif d\'activité professionnelle mentionnant l\'indice ou un justificatif Personnel CROUS / Radio Campus / CNRS / DREAL/CCNO',
		'Un certificat médical autorisant la pratique des activités choisies',
		'1 photo format d\'identité prête à l\'emploi',
		'Le montant de l\'adhésion en chèque à l\'ordre de l\'Agent Comptable de l\'université d\'Orléans'
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listePiece = this.listePiece.filter(function(piece) {
				return piece.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	// Suppression d'une piece
	constructor(public alertCtrl: AlertController) {}

	SupprimerPiece() {
		console.log(this.selectSuppressionPiece)
		console.log(this.selectSuppressionPiece.choixSuppressionPiece)
		let alert = this.alertCtrl.create({
			title: 'Etes-vous sûr de supprimer cette pièce d\'inscription?',
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
