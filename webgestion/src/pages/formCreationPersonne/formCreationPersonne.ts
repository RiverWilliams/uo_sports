import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationpersonne',
	templateUrl: 'formCreationPersonne.html'
})
export class formCreationPersonnePage {

	// Creation personne
	creationPersonne = {
		nom: '',
		prenom: '',
		adresse: '',
		telephone: '',
		email: '',
		categorie_personne: ''
	};

	listeCategorie = [
		'Étudiant, IRFMK, Psychomotricité, Infirmières',
		'Personnel de l\'Université',
		'Personnel du CROUS / Radio Campus',
		'Personnel du CNRS / DREAL / CCNO',
	];

	creationPersonneForm() {
		console.log(this.creationPersonne)
	};

}
