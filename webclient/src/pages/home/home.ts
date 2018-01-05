import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SeancePage} from './seance';
import {PanierPage} from './panier';
import {Activite} from '../../common/model'
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    ngOnInit(): void {
        this.web.activites.getAll().subscribe(data => this.activites = data.sort(Comparateur.Activite.nom));
    }

    activites: Activite [];

    public page2: any;

    constructor(public navCtrl: NavController, private web: WebserviceProvider) {
        this.page2 = PanierPage;
    }

    naviguer(p: Activite): void {
        this.navCtrl.push(SeancePage, {
            paramPasse: p
        })
    }

}
