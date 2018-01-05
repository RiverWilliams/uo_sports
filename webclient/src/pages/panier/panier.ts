import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InscrPage} from '../inscr/inscr';
import {HomePage} from '../home/home';
import {Creneau} from "../../common/model";
import {PanierProvider} from "../../providers/panier/panier";
import {WebserviceProvider} from "../../common/webservice";


@Component({
    selector: 'page-panier',
    templateUrl: 'panier.html'
})
export class PanierPage {

    public creneaux: Creneau[];

    constructor(public navCtrl: NavController, private panier: PanierProvider, private web: WebserviceProvider) {
        this.creneaux = this.panier.creneaux;
    }

    naviguer(): void {
        this.navCtrl.push(InscrPage, {
            paramPasse: this.creneaux
        })
    }

    accueil(){
        this.navCtrl.push(HomePage);
    }
}