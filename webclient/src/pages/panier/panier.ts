import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {InscrPage} from '../inscr/inscr';
import {Inscription} from "../../common/model";
import {PanierProvider} from "../../providers/panier/panier";


@Component({
    selector: 'page-panier',
    templateUrl: 'panier.html'
})
export class PanierPage {

    public inscriptions: Inscription[];

    constructor(public navCtrl: NavController, private panier: PanierProvider) {
        this.inscriptions = this.panier.inscriptions;
    }

    naviguer(): void {
        this.navCtrl.push(InscrPage, {inscriptions: this.inscriptions});
    }


}