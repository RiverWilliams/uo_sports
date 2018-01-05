import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Actualite} from "../../common/model";
import {Filtre, FiltrePage} from "../filtre/filtre";
import {PopoverController} from 'ionic-angular';

@Component({
    selector: 'page-actu',
    templateUrl: 'actualite.html'
})
export class ActuPage  {

    public monParam;

    actualites: Actualite[] = [
    	{
    		dateDebut: new Date(),
		    dateFin: new Date(),
		    dateMiseEnLigne: new Date(),
		    descCourte: "une actualité bla bla bla qui se passe un jour",
		    descLongue: "il etait un fois une catualité qui arrivait et du coup elle se produit et c'est une actualité de type actuelle et voila",
		    id?: 3,
		    image: "../../../resources/image-stade.jpg",
		    titre: "une actu nulle"
    	}
    ]




    constructor(public  navCtrl: NavController, public navParams: NavParams) {

        this.monParam = navParams.get("paramPasse");

    }



}
