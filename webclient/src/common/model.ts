export interface Activite {
    id?: number;
    nom: string;
}

export interface Actualite {
    dateDebut: Date;
    dateFin: Date;
    dateMiseEnLigne: Date;
    descCourte: string;
    descLongue: string;
    id?: number;
    image: string;
    titre: string;
}

export interface CategoriePersonne {
    id?: number;
    nom: string;
    prix: number;
}

export interface CategorieSport {
    id?: number;
    nom: string;
}

export interface Creneau {
    activite: Activite;
    effectif: number;
    heureDebut: Date;
    heureFin: Date;
    id?: number;
    jour: number;
    lieu: Lieu;
    niveau: Niveau;
    responsable: Responsable;
}

export interface Lieu {
    id?: number;
    adresse: string;
    nom: string;
    ville: string;
}

export interface Niveau {
    id?: number;
    nom: string;
}

export interface Personne {
    adresse: string;
    categoriePersonne: CategoriePersonne;
    email: string;
    id?: number;
    nom: string;
    prenom: string;
    telephone: string;
}

export interface PieceInscription {
    id?: number;
    nom: string;
}

export interface Responsable {
    email: string;
    id?: number;
    nom: string;
    prenom: string;
}

export interface Sport {
    id?: number;
    nom: string;
}

export interface Inscription {
    personne?: Personne;
    demande: boolean;
    ects: number;
    enAttente: boolean;
    nombreHeures: number;
    creneau?: Creneau;
}