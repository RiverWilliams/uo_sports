import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebserviceProvider } from "../../common/webservice";
import { FormControl } from "@angular/forms";
import { Comparateur } from "../../common/comparateur";
import { Observable } from "rxjs/Observable";
import { modificationLieuPage } from '../modificationLieu/modificationLieu';

@Component({
	selector: 'page-selectmodificationlieu',
	templateUrl: 'selectModificationLieu.html'
})

export class selectModificationLieuPage {

	search = new FormControl();
	
	constructor(public navCtrl: NavController, private web: WebserviceProvider) {

	}

	ngOnInit(): void {
		Observable.combineLatest(this.search.valueChanges, this.web.sports.getAll(), (search: string, sports: Sport[]) => {
		const s = search.toLowerCase();
	  	return sports.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
		}).subscribe(d => this.listeSport = d);
	}

	SelectModificationLieu() {

		this.navCtrl.push(modificationLieuPage,);		
	};
}
