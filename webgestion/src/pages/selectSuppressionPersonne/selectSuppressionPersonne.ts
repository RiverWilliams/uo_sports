import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import {Personne} from "../../common/model";

@Component({
	selector: 'page-selectsuppressionpersonne',
	templateUrl: 'selectSuppressionPersonne.html'
})
export class selectSuppressionPersonnePage {
	search = new FormControl();
    listePersonne: Personne[];

	// Suppression d'une personne
	constructor(public alertCtrl: AlertController, private  web: WebserviceProvider) {

	}

	ngOnInit(): void {
	    Observable.combineLatest(this.search.valueChanges, this.web.personnes.getAll(), (search: string, personnes: Personne[]) => {
	      const s = search.toLowerCase();
	      return personnes.filter(pers => pers.nom.toLowerCase().includes(s)).sort(Comparateur.Personne.nom);
    	}).subscribe(d => this.listePersonne = d);
    	
	}

	SuppressionPersonne() {
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
