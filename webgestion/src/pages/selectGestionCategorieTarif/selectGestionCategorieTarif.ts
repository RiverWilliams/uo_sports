import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebserviceProvider } from "../../common/webservice";
import { FormControl } from "@angular/forms";
import { Comparateur } from "../../common/comparateur";
import { Observable } from "rxjs/Observable";
import { gestionCategorieTarifPage } from '../gestionCategorieTarif/gestionCategorieTarif';

@Component({
	selector: 'page-selectgestioncategorietarif',
	templateUrl: 'selectGestionCategorieTarif.html'
})

export class selectGestionCategorieTarifPage {

	search = new FormControl();

	constructor(public navCtrl: NavController, private web: WebserviceProvider) {

	}

	ngOnInit(): void {
	/*	Observable.combineLatest(this.search.valueChanges, this.web.sports.getAll(), (search: string, sports: Sport[]) => {
		const s = search.toLowerCase();
	  	return sports.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
		}).subscribe(d => this.listeSport = d);
		*/
	}
	
	GestionCategorieTarifForm() {

		this.navCtrl.push(gestionCategorieTarifPage);
	}


}
