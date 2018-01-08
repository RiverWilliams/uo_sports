import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modificationPiecePage } from '../modificationPiece/modificationPiece';

@Component({
	selector: 'page-selectmodificationpiece',
	templateUrl: 'selectModificationPiece.html'
})

export class selectModificationPiecePage {
	constructor(public navCtrl: NavController) {

	}

	selectModificationPiece = {
		choixModificationPiece: ''
	};

	listePiece = [
		'Le bulletin d\'adhésion',
		'Un justificatif d\'activité professionnelle mentionnant l\'indice ou un justificatif Personnel CROUS / Radio Campus / CNRS / DREAL/CCNO',
		'Un certificat médical autorisant la pratique des activités choisies',
		'1 photo format d\'identité prête à l\'emploi',
		'Le montant de l\'adhésion en chèque à l\'ordre de l\'Agent Comptable de l\'université d\'Orléans'
	];

	filterItems(ev: any) {
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.listePiece = this.listePiece.filter(function(piece) {
				return piece.toLowerCase().includes(val.toLowerCase());
			});
		}
	}

	SelectModificationPiece() {
		console.log(this.selectModificationPiece);
		console.log(this.selectModificationPiece.choixModificationPiece);
		this.navCtrl.push(modificationPiecePage, {liste: this.selectModificationPiece.choixModificationPiece});		
	};
}
