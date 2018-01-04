import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Activite, Creneau, Lieu, Niveau, Responsable} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";

@Component({
    selector: 'page-seance',
    templateUrl: 'seance.html'
})
export class SeancePage implements OnInit {
    ngOnInit(): void {
        this.webservice.creneaux.getAll().subscribe(data => this.creneaux = data);
    }

    public monParam;

    creneaux: Creneau[];



    constructor(public  navCtrl: NavController, public navParams: NavParams, private webservice: WebserviceProvider) {

        this.monParam = navParams.get("paramPasse");
        ;
    }

}
