import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { selectListeEffectifCreneauPage } from '../selectListeEffectifCreneau/selectListeEffectifCreneau';
import {Activite} from "../../common/model";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/combineLatest";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";

@Component({
	selector: 'page-selectlisteeffectif',
	templateUrl: 'selectListeEffectif.html'
})
export class selectListeEffectifPage {

	listeActivite: Activite[]
	search = new FormControl();

	constructor(public navCtrl: NavController, private web: WebserviceProvider) {

	}

	ngOnInit(): void {
		this.web.activites.getAll().subscribe(d => this.listeActivite = d);
		Observable.combineLatest(this.search.valueChanges, this.web.activites.getAll(), (search: string, activites: Activite[]) => {
			const s = search.toLowerCase();
			return activites.filter(activite => activite.nom.toLowerCase().includes(s)).sort(Comparateur.Activite.nom);
		}).subscribe(d => this.listeActivite = d);
	}

	ListeEffectif(id: number) {
		this.navCtrl.push(selectListeEffectifCreneauPage, {idActivite: id});
	};
}
