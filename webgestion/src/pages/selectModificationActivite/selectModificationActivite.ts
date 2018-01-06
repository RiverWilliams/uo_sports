import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationActivitePage } from '../modificationActivite/modificationActivite';

@Component({
	selector: 'page-selectmodificationactivite',
	templateUrl: 'selectModificationActivite.html'
})
export class selectModificationActivitePage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationActivite = {
		choixModificationActivite: ''
	};

	liste = [
		'activite1',
		'activite2',
	];

	testfunc() {
		this.navCtrl.push(modificationActivitePage, {liste: this.selectModificationActivite.choixModificationActivite});
		console.log(this.selectModificationActivite);
		
	};
}
