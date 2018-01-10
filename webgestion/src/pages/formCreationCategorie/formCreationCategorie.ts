import {Component} from '@angular/core';
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";
import {AlertController, ToastController} from "ionic-angular";
import {CategorieSport} from "../../common/model";

class Categorie {
}

@Component({
  selector: 'page-formcreationcategorie',
  templateUrl: 'formCreationCategorie.html'
})
export class formCreationCategoriePage {


  constructor(private web: WebserviceProvider, private alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  creationCategorieForm(categorie: CategorieSport) {
    console.log(categorie);
    this.web.categoriesSports.post(categorie).subscribe(() => {
        Utilitaire.createToastOk(this.toastCtrl).present();
      }, (err) => {
        Utilitaire.createAlertErreur(this.alertCtrl).present();
      }
    )
  };

}
