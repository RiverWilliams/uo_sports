import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationCategoriePage } from '../modificationCategorie/modificationCategorie';

@Component({
	selector: 'page-selectmodificationcategorie',
	templateUrl: 'selectModificationCategorie.html'
})

export class selectModificationCategoriePage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationCategorie = {
		choixModificationCategorie: ''
	};

	listeCategorie = [
		'Eau',
		'Pied',
		'Collectif',
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeCategorie = this.listeCategorie.filter(function(categorie) {
				return categorie.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationCategorie() {
		console.log(this.selectModificationCategorie);
		console.log(this.selectModificationCategorie.choixModificationCategorie);
		this.navCtrl.push(modificationCategoriePage, {liste: this.selectModificationCategorie.choixModificationCategorie});		
	};
}
