import { Component } from '@angular/core';

@Component({
	selector: 'page-formcreationcreneau',
	templateUrl: 'formCreationCreneau.html'
})
export class formCreationCreneauPage {

	// Creation d'un creneau
	creationCreneau = {
		nomActivite: '',
		nomCreneau: '',
		responsableCreneau: '',
		jourCreneau: '',
		heureDebutCreneau: '',
		heureFinCreneau: '',
		effectifCreneau: '',
		niveauCreneau: '',
		lieuCreneau: '',

	};

	listeActivite = [
		'Natation',
		'Foot',
		'Course'
	];

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

	creationCreneauForm() {
		console.log(this.creationCreneau)
	};

}
