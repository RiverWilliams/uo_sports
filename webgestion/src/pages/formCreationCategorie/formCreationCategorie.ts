import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationcategorie',
	templateUrl: 'formCreationCategorie.html'
})
export class formCreationCategoriePage {

	// Creation de la catégorie
	creationCategorie = {
		nom: '',
	};

	creationCategorieForm() {
		console.log(this.creationCategorie)
	};

}
