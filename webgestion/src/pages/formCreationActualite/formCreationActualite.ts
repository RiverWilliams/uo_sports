import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationactualite',
	templateUrl: 'formCreationActualite.html'
})
export class formCreationActualitePage {

	// Creation d'actualite
	creationActualite = {
		titreActualite: '',
		dateDebutActualite: '',
		dateFinActualite: '',
		dateMiseEnLigneActualite: '',
		descriptionCourteActualite: '',
		descriptionLongueActualite: '',
		imageActualite: '',
	};

	creationActualiteForm() {
		console.log(this.creationActualite)
	};

}
