import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationetudiant',
	templateUrl: 'formCreationEtudiant.html'
})
export class formCreationEtudiantPage {

	// Creation responsable
	creationEtudiant = {
		nomEtudiant: '',
		prenomEtudiant: '',
		emailEtudiant: '',
	};

	creationEtudiantForm() {
		console.log(this.creationEtudiant)
	};

}
