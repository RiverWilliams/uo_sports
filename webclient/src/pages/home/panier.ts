import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InscrPage} from './inscr';
import {Creneau} from "../../common/model";
import {PanierProvider} from "../../providers/panier/panier";
import {WebserviceProvider} from "../../common/webservice";


@Component({
    selector: 'page-panier',
    templateUrl: 'panier.html'
})
export class PanierPage {

    public creneaux: Creneau[];

    public page: any;

    constructor(public navCtrl: NavController, private panier: PanierProvider, private web: WebserviceProvider) {
        this.page = InscrPage;
        this.creneaux = this.panier.creneaux;
    }


    supprimer(creneau: Creneau): void {
        this.panier.supprimer(creneau);

    }

}
