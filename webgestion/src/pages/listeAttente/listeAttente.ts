import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Inscription} from '../../common/model';
import {HomePage} from '../home/home';
import {WebserviceProvider} from "../../common/webservice";

@Component({
	selector: 'page-listeAttente',
	templateUrl: 'listeAttente.html'
})

export class listeAttentePage implements OnInit {
	public idCreneau;

	listeInscription: Inscription[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idCreneau = navParams.get("idCreneau");
	}

	ngOnInit(): void {
	this.web.creneaux.getEnAttentes(this.idCreneau).subscribe(f => this.listeInscription = f);
	}

	ListeAttenteForm() {
		const valider = this.listeInscription.filter(value => !value.enAttente);
		valider.forEach(value => this.web.inscriptions.put(value))
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
