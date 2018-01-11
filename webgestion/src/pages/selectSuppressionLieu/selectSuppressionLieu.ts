import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-selectsuppressionlieu',
  templateUrl: 'selectSuppressionLieu.html'
})
export class selectSuppressionLieuPage {

  search = new FormControl();

  constructor(public alertCtrl: AlertController) {

  }


  SupprimerLieu() {

    let alert = this.alertCtrl.create({
      title: 'Etes-vous sûr de supprimer cette activité?',
      message: '',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Annuler clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
