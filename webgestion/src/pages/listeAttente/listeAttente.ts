import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Inscription } from '../../common/model';
import { Personne } from '../../common/model';
import { Creneau } from '../../common/model';
import { HomePage } from '../home/home';
import { WebserviceProvider } from "../../common/webservice";

@Component({
	selector: 'page-listeAttente',
	templateUrl: 'listeAttente.html'
})

export class listeAttentePage implements OnInit {
	public idCreneau;

	listeInscription: Inscription[];
	listePersonne: Personne[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider){
		this.idCreneau = navParams.get("idCreneau");
	}

	ngOnInit(): void {
	this.web.creneaux.getEnAttentes(this.idCreneau).subscribe(f => this.listeInscription = f);

	}

	@Input() inscription: Inscription;
	@Input() personne : Personne;

	ListeAttenteForm() {
		console.log(this.listeInscription);
		console.log(this.listePersonne);
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}
