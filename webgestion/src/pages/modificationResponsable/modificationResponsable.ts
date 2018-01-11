import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationresponsable',
	templateUrl: 'modificationResponsable.html'
})

export class modificationResponsablePage {

	constructor(public navCtrl: NavController, public navParams: NavParams){

	}

	modificationResponsableForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
