import {Component, OnInit} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SeancePage} from '../seance/seance';
import {PanierPage} from '../panier/panier';
import {Activite} from '../../common/model'
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {PopoverController} from 'ionic-angular';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    activites: Activite[];

    ngOnInit(): void {
        this.web.activites.getAll().subscribe(data => this.activites = data.sort(Comparateur.Activite.nom));
    }

    public page2: any;

    constructor(public navCtrl: NavController, public menu: MenuController, private web: WebserviceProvider, public popoverCtrl: PopoverController) {
        this.page2 = PanierPage;
        menu.enable(true);
    }

    naviguer(p: Activite): void {
        this.navCtrl.push(SeancePage, {
            paramPasse: p
        })
    }

    ouvreMenu(evt) {
        /*
        if (evt === "filtre") {
            this.menu.enable(true, 'menu1');
            this.menu.enable(false, 'menu2');
        } else {
            this.menu.enable(true, 'menu2');
            this.menu.enable(false, 'menu1');
        }
        */

        this.menu.toggle();
    }


}
