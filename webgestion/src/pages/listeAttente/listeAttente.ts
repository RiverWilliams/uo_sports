import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-listeAttente',
	templateUrl: 'listeAttente.html'
})

export class listeAttentePage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("Parametre ",this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'attente suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	listeInscrit1 = [
		'francis',
		'tony',
		'lois',
		'clark',
		'david',
		'goliat',
		'victor'
	];

	listeInscrit2 = [
		'xxxxx',
		'Metroixxxxxd',
		'Megxxxxa Mxxxxan',
		'Txxxxxhe Legxxxxxend of Zelda',
		'Paxxxc-Man',
		'GTA',
		'Halo'
	];

	listeAttente = {
		choixListeAttente : ''
	};

	ListeAttenteForm() {
		console.log("Selected Item", this.listeAttente);
		console.log(this.listeAttente.choixListeAttente);
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}