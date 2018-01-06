import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { desinscriptionEtudiantPage } from '../desinscriptionEtudiant/desinscriptionEtudiant';

@Component({
	selector: 'page-selectdesinscriptionetudiant',
	templateUrl: 'selectDesinscriptionEtudiant.html'
})
export class selectDesinscriptionEtudiantPage {

	constructor(public navCtrl: NavController) {

	}

	selectDesinscriptionEtudiant = {
		choixDesinscriptionEtudiant: ''
	};

	listeEtudiant = [
		'andré',
		'martin',
		'sophie',
		'bacassine',
		'denis',
		'john'
	];

	SelectDesinscriptionEtudiant() {
		console.log("Selected Item", this.selectDesinscriptionEtudiant);
		console.log(this.selectDesinscriptionEtudiant.choixDesinscriptionEtudiant);
		this.navCtrl.push(desinscriptionEtudiantPage, {listeEtudiant: this.selectDesinscriptionEtudiant.choixDesinscriptionEtudiant});
	}

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeEtudiant = this.listeEtudiant.filter(function(etudiant) {
				return etudiant.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

}
