import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationactivite',
	templateUrl: 'formCreationActivite.html'
})
export class formCreationActivitePage {

	// Creation d'activite
	creationActivite = {
		nomActivite: '',
		responsableActivite: '',
		jourActivite: '',
		heureDebutActivite: '',
		heureFinActivite: '',
		effectifActivite: '',
		niveauActivite: '',
		lieuActivite: '',

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

	creationActiviteForm() {
		console.log(this.creationActivite)
	};

}
