import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { listeEffectifPage } from '../listeEffectif/listeEffectif';
import { Creneau } from "../../common/model";
import { Activite } from "../../common/model";
import { WebserviceProvider } from "../../common/webservice";

@Component({
	selector: 'page-selectlisteeffectifcreneau',
	templateUrl: 'selectListeEffectifCreneau.html'
})

export class selectListeEffectifCreneauPage {
	public idActivite;

	listeCreneau: Creneau[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idActivite = navParams.get("idActivite");
	}

	ngOnInit(): void {
		this.web.activites.getCreneaux(this.idActivite).subscribe(d => this.listeCreneau = d);
	}

	SelectListeEffectifCreneauForm(id: number) {
		this.navCtrl.push(listeEffectifPage, {idCreneau: id});
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
