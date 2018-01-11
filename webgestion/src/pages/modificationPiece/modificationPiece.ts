import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-modificationpiece',
	templateUrl: 'modificationPiece.html'
})

export class modificationPiecePage {

	constructor(public navCtrl: NavController, public navParams: NavParams){

	}

	modificationPieceForm() {

	};

	goback() {
		this.navCtrl.push(HomePage);
	}
}
