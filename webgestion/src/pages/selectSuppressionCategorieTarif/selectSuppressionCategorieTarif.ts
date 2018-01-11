import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WebserviceProvider } from "../../common/webservice";
import { FormControl } from "@angular/forms";
import { Comparateur } from "../../common/comparateur";
import { Observable } from "rxjs/Observable";

@Component({
	selector: 'page-selectsuppressioncategorietarif',
	templateUrl: 'selectSuppressionCategorieTarif.html'
})
export class selectSuppressionCategorieTarifPage {

	search = new FormControl();


	// Suppression d'activite
	constructor(public alertCtrl: AlertController, private web: WebserviceProvider) {

	}

	SupprimerCategorieTarifForm() {
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
