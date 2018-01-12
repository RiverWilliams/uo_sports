import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { desinscriptionPersonnePage } from '../desinscriptionPersonne/desinscriptionPersonne';
import {Creneau} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Comparateur} from "../../common/comparateur";

@Component({
	selector: 'page-selectdesinscriptionpersonne',
	templateUrl: 'selectDesinscriptionPersonne.html'
})
export class selectDesinscriptionPersonnePage {

	search = new FormControl();
  	creneaux: Creneau[];

	constructor(public navCtrl: NavController, private web: WebserviceProvider) {

	}

	ngOnInit(): void {
	    this.web.creneaux.getAll().subscribe(d => this.creneaux = d.sort(Comparateur.Creneau.activiteChronologique));
	    Observable.combineLatest(this.search.valueChanges, this.web.creneaux.getAll(), (search: string, creneaux: Creneau[]) => {
	      const s = search.toLowerCase();
	      return creneaux.filter(v => (v.activite).nom.toLowerCase().includes(s)).sort(Comparateur.Creneau.activiteChronologique);
	    }).subscribe(d => this.creneaux = d);
	}

	SelectDesinscriptionPersonne() {
		this.navCtrl.push(desinscriptionPersonnePage);
	}
}
