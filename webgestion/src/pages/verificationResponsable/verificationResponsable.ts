import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-verificationresponsable',
	templateUrl: 'verificationResponsable.html'
})

export class verificationResponsablePage {
	public nomliste;

	constructor(public navCtrl: NavController, public navParams: NavParams){

	}

	VerificationResponsableForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
