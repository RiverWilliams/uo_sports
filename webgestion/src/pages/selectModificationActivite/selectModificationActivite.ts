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

	listeActivite = [
		'Natation',
		'Foot',
		'Course',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeActivite = this.listeActivite.filter(function(activite) {
				return activite.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationActivite() {
		console.log(this.selectModificationActivite);
		console.log(this.selectModificationActivite.choixModificationActivite);
		this.navCtrl.push(modificationActivitePage, {liste: this.selectModificationActivite.choixModificationActivite});		
	};
}
