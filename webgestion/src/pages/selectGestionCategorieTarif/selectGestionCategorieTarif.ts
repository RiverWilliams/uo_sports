import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { gestionCategorieTarifPage } from '../gestionCategorieTarif/gestionCategorieTarif';

@Component({
	selector: 'page-selectgestioncategorietarif',
	templateUrl: 'selectGestionCategorieTarif.html'
})

export class selectGestionCategorieTarifPage {
	constructor(public navCtrl: NavController) {

	}

	//Modification d'un catégorie utilisateur
	listeCategorie = [
		'Étudiant, IRFMK, Psychomotricité, Infirmières',
		'Personnel de l\'Université',
		'Personnel du CROUS / Radio Campus',
		'Personnel du CNRS / DREAL / CCNO',
	];

	gestionCategorieTarif = {
		choixGestionCategorieTarif: ''
	};
	
	GestionCategorieTarifForm() {
		console.log("Selected Item", this.gestionCategorieTarif);
		console.log(this.gestionCategorieTarif.choixGestionCategorieTarif);
		this.navCtrl.push(gestionCategorieTarifPage, {liste: this.gestionCategorieTarif.choixGestionCategorieTarif});
	}

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listeCategorie = this.listeCategorie.filter(function(personnel) {
				return personnel.toLowerCase().includes(val.toLowerCase());
			});
		}
	}
}
