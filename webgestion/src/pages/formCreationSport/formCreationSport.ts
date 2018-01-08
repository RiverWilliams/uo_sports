import {Component} from '@angular/core';
import {AlertController} from "ionic-angular";
import {WebserviceProvider} from "../../common/webservice";
import {Sport} from "../../common/model";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-formcreationsport',
  templateUrl: 'formCreationSport.html'
})
export class formCreationSportPage {

  valider: boolean = false;

  constructor(private alertCtrl: AlertController, private web: WebserviceProvider) {

  }

  CreationSportForm(s: Sport) {
    this.valider = true;
    this.web.sports.post(s).subscribe(() => this.alertCtrl.create({
        title: "Confirmation",
        message: "Sport crée",
        buttons: [{
          text: "OK", role: 'cancel', handler: () => {
            this.valider = false;
            return true;
          }
        }]
      }).present(), () => {
        this.valider = false;
        Utilitaire.createAlertErreur(this.alertCtrl).present();
      }
    )
  };

}
