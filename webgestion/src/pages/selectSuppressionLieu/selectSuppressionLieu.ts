import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WebserviceProvider } from "../../common/webservice";
import { FormControl } from "@angular/forms";
import { Comparateur } from "../../common/comparateur";
import { Observable } from "rxjs/Observable";

@Component({
	selector: 'page-selectsuppressionlieu',
	templateUrl: 'selectSuppressionLieu.html'
})
export class selectSuppressionLieuPage {

	search = new FormControl();

	constructor(public alertCtrl: AlertController, private web: WebserviceProvider) {

	}

	ngOnInit(): void {
	/*	Observable.combineLatest(this.search.valueChanges, this.web.sports.getAll(), (search: string, sports: Sport[]) => {
		const s = search.toLowerCase();
	  	return sports.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
		}).subscribe(d => this.listeSport = d);
		*/
	}

	SupprimerLieu() {

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
