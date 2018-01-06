import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Activite, Creneau} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur"

@Component({
    selector: 'page-seance',
    templateUrl: 'seance.html'
})
export class SeancePage implements OnInit {
    ngOnInit(): void {
        this.webservice.activites.getCreneaux(this.monParam.id).subscribe(data => this.creneaux = data.sort(Comparateur.Creneau.villeChronologique));
    }

    public monParam: Activite;

    creneaux: Creneau[];

    constructor(public  navCtrl: NavController, public navParams: NavParams, private webservice: WebserviceProvider) {
        this.monParam = navParams.get("paramPasse");
    }

}
