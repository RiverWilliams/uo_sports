import {Component} from '@angular/core';
import {AlertController, ToastController} from "ionic-angular";
import {WebserviceProvider} from "../../common/webservice";
import {CategorieSport} from "../../common/model";
import {Utilitaire} from "../../common/utilitaire";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-formcreationsport',
  templateUrl: 'formCreationSport.html'
})
export class formCreationSportPage {


  categories: CategorieSport[];

  constructor(private alertCtrl: AlertController, private web: WebserviceProvider, private toastCtrl: ToastController) {
    web.categoriesSports.getAll().subscribe(d => this.categories = d.sort(Comparateur.CategorieSport.nom));
  }

  CreationSportForm(s) {
    this.web.sports.post(s).subscribe((id) => {
        if (Array.isArray(s.categories))
          s.categories.forEach(s => this.web.sports.addCategorie(id, s).subscribe(() => {
            }, () => Utilitaire.createAlertErreur(this.alertCtrl).present()
          ))
          ;
        Utilitaire.createToastOk(this.toastCtrl).present();
      }, () => {
        Utilitaire.createAlertErreur(this.alertCtrl).present();
      }
    )
  };

}
