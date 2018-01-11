import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationpersonne',
	templateUrl: 'modificationPersonne.html'
})

export class modificationPersonnePage {

	constructor(public navCtrl: NavController, public navParams: NavParams){

	}

	modificationPersonneForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
