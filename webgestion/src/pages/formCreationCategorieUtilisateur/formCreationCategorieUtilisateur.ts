import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationcategorieutilisateur',
	templateUrl: 'formCreationCategorieUtilisateur.html'
})
export class formCreationCategorieUtilisateurPage {

	// Creation d'activite
	creationCategorieUtilisateur = {
		nomCategorieUtilisateur: '',
		tarifUtilisateur: ''
	};

	listeResponsable = [
		'mr zen',
		'mrs peace',
		'kid war'
	];

	listeJour = [
		'lundi',
		'mardi',
		'mercredi',
		'jeudi',
		'vendredi',
		'samedi',
		'dimanche'
	];

	listeNiveau = [
		'debutant',
		'intermediaire',
		'pro'
	];

	listeLieu = [
		'piscine',
		'gymnase',
		'stade'
	];

	CreationCategorieUtilisateur() {
		console.log(this.creationCategorieUtilisateur)
	};

}
