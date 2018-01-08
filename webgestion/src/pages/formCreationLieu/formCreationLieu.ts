import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationlieu',
	templateUrl: 'formCreationLieu.html'
})
export class formCreationLieuPage {

	// Creation d'un lieu
	creationLieu = {
		nomLieu: '',
		adresseLieu: '',
		villeLieu: ''
	};

	CreationLieuForm() {
		console.log(this.creationLieu)
	};

}
