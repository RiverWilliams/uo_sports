import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-desinscriptionpersonne',
	templateUrl: 'desinscriptionPersonne.html'
})

export class desinscriptionPersonnePage {


	constructor(public navCtrl: NavController, public navParams: NavParams){

	}


	DesinscriptionPersonneForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
