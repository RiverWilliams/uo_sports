import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationSportPage } from '../modificationSport/modificationSport';

@Component({
	selector: 'page-selectmodificationsport',
	templateUrl: 'selectModificationSport.html'
})

export class selectModificationSportPage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationSport = {
		choixModificationSport: ''
	};

	listeSport = [
		'Athlétisme',
		'Gymnastique'
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeSport = this.listeSport.filter(function(sport) {
				return sport.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationSport() {
		console.log(this.selectModificationSport);
		console.log(this.selectModificationSport.choixModificationSport);
		this.navCtrl.push(modificationSportPage, {liste: this.selectModificationSport.choixModificationSport});		
	};
}
