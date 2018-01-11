import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Inscription, Personne, Creneau } from '../../common/model';
import { HomePage } from '../home/home';
import { WebserviceProvider } from "../../common/webservice";

@Component({
	selector: 'page-listeAttente',
	templateUrl: 'listeAttente.html'
})

export class listeAttentePage implements OnInit {
	public idCreneau;

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idCreneau = navParams.get("idCreneau");
	}


    ngOnInit(): void {

    }

	@Input() inscription: Inscription;
	@Input() personne : Personne;

	ListeAttenteForm() {

	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}