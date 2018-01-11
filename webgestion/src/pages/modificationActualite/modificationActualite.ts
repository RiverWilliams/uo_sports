import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {WebserviceProvider} from "../../common/webservice";

@Component({
  selector: 'page-modificationactualite',
  templateUrl: 'modificationActualite.html'
})

export class modificationActualitePage implements OnInit {
  public idSport;
  // Modification d'une actualité


  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController) {
    //this.idSport = navParams.get("idSport");
  }

  ngOnInit(): void {

  }

  compareFn(a: any, b: any) {
    return a.id === b.id;
  }

  modificationActualiteForm() {

  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
