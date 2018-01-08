import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationLieuPage } from '../modificationLieu/modificationLieu';

@Component({
	selector: 'page-selectmodificationlieu',
	templateUrl: 'selectModificationLieu.html'
})

export class selectModificationLieuPage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationLieu = {
		choixModificationLieu: ''
	};

	listeLieu = [
		'Gymnase',
		'Stage',
		'Piscine',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeLieu = this.listeLieu.filter(function(lieu) {
				return lieu.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationLieu() {
		console.log(this.selectModificationLieu);
		console.log(this.selectModificationLieu.choixModificationLieu);
		this.navCtrl.push(modificationLieuPage, {liste: this.selectModificationLieu.choixModificationLieu});		
	};
}
