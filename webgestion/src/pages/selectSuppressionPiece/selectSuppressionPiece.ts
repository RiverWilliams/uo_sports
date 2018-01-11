import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {FormControl} from "@angular/forms";

@Component({
	selector: 'page-selectsuppressionpiece',
	templateUrl: 'selectSuppressionPiece.html'
})
export class selectSuppressionPiecePage {

	search = new FormControl();

	constructor(public alertCtrl: AlertController) {

	}



	SupprimerPiece() {
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
