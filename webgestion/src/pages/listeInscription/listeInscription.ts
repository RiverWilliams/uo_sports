import { Component } from '@angular/core';

@Component({
	selector: 'page-listeinscription',
	templateUrl: 'listeInscription.html'
})

export class listeInscriptionPage {

	items = [
		'andré',
		'martin',
		'sophie',
	];


	payeListeInscription = {
		choixPayeListeInscription : ''
	};

	itemSelected(item: string) {
		console.log("Selected Item", item);
		console.log(this.payeListeInscription);
	}

}