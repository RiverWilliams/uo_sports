import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { listeAttentePage } from '../listeAttente/listeAttente';
import { Creneau } from "../../common/model";
import { Activite } from "../../common/model";
import { WebserviceProvider } from "../../common/webservice";

@Component({
	selector: 'page-selectlisteattentecreneau',
	templateUrl: 'selectListeAttenteCreneau.html'
})

export class selectListeAttenteCreneauPage {
	public idActivite;

	listeCreneau: Creneau[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idActivite = navParams.get("idActivite");
	}

	ngOnInit(): void {
		this.web.activites.getCreneaux(this.idActivite).subscribe(d => this.listeCreneau = d);
	}

	SelectListeAttenteCreneauForm(id: number) {
		this.navCtrl.push(listeAttentePage, {idCreneau: id});
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
