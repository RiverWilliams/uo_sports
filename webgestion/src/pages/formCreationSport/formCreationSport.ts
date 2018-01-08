import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationsport',
	templateUrl: 'formCreationSport.html'
})
export class formCreationSportPage {

	// Creation d'un sport
	creationSport = {
		nom: ''
	};

	CreationSportForm() {
		console.log(this.creationSport)
	};

}
