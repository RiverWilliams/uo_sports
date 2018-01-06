import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-listeEffectif',
	templateUrl: 'listeEffectif.html'
})

export class listeEffectifPage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){
		this.nomliste = navParams.get("liste");
		console.log("hello");
		console.log(this.nomliste);
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//il faut importer la bonne liste d'effectif suivant le string liste
		//on fait en attendant avec la liste items1 dans l'html
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	}

	items1 = [
		'robert',
		'franck',
		'zoe',
		'megane',
		'clio',
		'polo',
		'gaston'
	];

	items2 = [
		'xxxxx',
		'Metroixxxxxd',
		'Megxxxxa Mxxxxan',
		'Txxxxxhe Legxxxxxend of Zelda',
		'Paxxxc-Man',
		'GTA',
		'Halo'
	];

	itemSelected(item: string) {
		console.log("Selected Item", item);
	}

	goback() {
		this.navCtrl.push(HomePage);
	}
}