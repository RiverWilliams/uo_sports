import { Component } from '@angular/core';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	
	// Creation d'activite
	creationActivite = {
		nomActivite: '',
		responsableActivite: '',
		jourActivite: '',
		heureDebutActivite: '',
		heureFinActivite: '',
		effectifActivite: '',
		niveauActivite: '',
		lieuActivite: '',

	};
	creationActiviteForm() {
		console.log(this.creationActivite)
	};

	// Creation d'actualite
	creationActualite = {
		titreActualite: '',
		dateDebutActualite: '',
		dateFinActualite: '',
		dateMiseEnLigneActualite: '',
		descriptionCourteActualite: '',
		descriptionLongueActualite: '',
	};
	creationActualiteForm() {
		console.log(this.creationActualite)
	};



}
