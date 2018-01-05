import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FiltrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Filtre {
    nom: string,
    fonction: any
}

@IonicPage()
@Component({
    selector: 'page-filtre',
    templateUrl: 'filtre.html',
})
export class FiltrePage implements OnInit {

    private filtres: Filtre[];

    ngOnInit(): void {
        if (this.navParams.data) {
            this.filtres = this.navParams.data.filtres;
        }
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


}
