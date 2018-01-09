import {Component} from '@angular/core';
import {AlertController} from "ionic-angular";
import {WebserviceProvider} from "../../common/webservice";
import {CategorieSport, Sport} from "../../common/model";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-formcreationsport',
  templateUrl: 'formCreationSport.html'
})
export class formCreationSportPage {

  valider: boolean = false;

  categories: CategorieSport[];

  constructor(private alertCtrl: AlertController, private web: WebserviceProvider) {
    web.categoriesSports.getAll().subscribe(d => this.categories = d);
  }

  CreationSportForm(s) {
    this.valider = true;
    this.web.sports.post(s).subscribe((id) => {
        if (Array.isArray(s.categories))
          s.categories.forEach(s => this.web.sports.addCategorie(id, s).subscribe());
        this.alertCtrl.create({
          title: "Confirmation",
          message: "Sport crée",
          buttons: [{
            text: "OK", role: 'cancel', handler: () => {
              this.valider = false;
              return true;
            }
          }]
        }).present();
      }, () => {
        this.valider = false;
        Utilitaire.createAlertErreur(this.alertCtrl).present();
      }
    )
  };

}
