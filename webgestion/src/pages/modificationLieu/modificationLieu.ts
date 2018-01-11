import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationLieu',
	templateUrl: 'modificationLieu.html'
})

export class modificationLieuPage {


	constructor(public navCtrl: NavController, public navParams: NavParams){

	}



	modificationLieuForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
