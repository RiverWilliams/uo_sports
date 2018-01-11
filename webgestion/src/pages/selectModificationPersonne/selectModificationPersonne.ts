import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationPersonnePage } from '../modificationPersonne/modificationPersonne';

@Component({
	selector: 'page-selectmodificationpersonne',
	templateUrl: 'selectModificationPersonne.html'
})

export class selectModificationPersonnePage {
	constructor(public navCtrl: NavController) {

	}

	SelectModificationPersonne() {
		this.navCtrl.push(modificationPersonnePage,);		
	};
}
