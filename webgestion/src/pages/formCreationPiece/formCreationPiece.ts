import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationpiece',
	templateUrl: 'formCreationPiece.html'
})
export class formCreationPiecePage {

	// Creation d'une piece
	creationPiece = {
		nom: ''
	};

	CreationPieceForm() {
		console.log(this.creationPiece)
	};

}
