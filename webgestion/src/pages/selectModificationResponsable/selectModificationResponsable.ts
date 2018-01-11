import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationResponsablePage } from '../modificationResponsable/modificationResponsable';

@Component({
	selector: 'page-selectmodificationresponsable',
	templateUrl: 'selectModificationResponsable.html'
})

export class selectModificationResponsablePage {
	constructor(public navCtrl: NavController) {

	}

	SelectModificationResponsable() {
		this.navCtrl.push(modificationResponsablePage,);		
	};
}
