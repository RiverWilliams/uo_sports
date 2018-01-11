import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormControl} from "@angular/forms";
import {gestionCategorieTarifPage} from '../gestionCategorieTarif/gestionCategorieTarif';

@Component({
	selector: 'page-selectgestioncategorietarif',
	templateUrl: 'selectGestionCategorieTarif.html'
})

export class selectGestionCategorieTarifPage implements OnInit{

	search = new FormControl();

	constructor(public navCtrl: NavController) {

	}

	ngOnInit(): void {

	}

	GestionCategorieTarifForm() {

		this.navCtrl.push(gestionCategorieTarifPage);
	}


}
