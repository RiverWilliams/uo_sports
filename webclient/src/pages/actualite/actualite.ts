import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Actualite} from "../../common/model";

@Component({
    selector: 'page-actu',
    templateUrl: 'actualite.html'
})
export class ActuPage  {

    public monParam;

    actualites: Actualite[];




    constructor(public  navCtrl: NavController, public navParams: NavParams) {

        this.monParam = navParams.get("paramPasse");

    }

}
