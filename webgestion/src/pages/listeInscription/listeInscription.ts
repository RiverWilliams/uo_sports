import { Component } from '@angular/core';

@Component({
	selector: 'page-listeinscription',
	templateUrl: 'listeInscription.html'
})

export class listeInscriptionPage {

	listeInscription = [
		'andré',
		'martin',
		'sophie',
		'bacassine',
		'denis',
		'john'
	];

	payeListeInscription = {
		choixPayeListeInscription : ''
	};

	ListeInscriptionForm() {
		console.log("Selected Item", this.payeListeInscription);
		console.log(this.payeListeInscription.choixPayeListeInscription);
	}

}