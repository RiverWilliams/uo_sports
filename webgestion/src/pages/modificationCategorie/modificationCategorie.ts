import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {CategorieSport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-modificationcategorie',
  templateUrl: 'modificationCategorie.html'
})

export class modificationCategoriePage {
  public idCategorie;

  categorie: CategorieSport;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private alertCtrl: AlertController) {
    this.idCategorie = navParams.get("idCategorie");
    this.web.categoriesSports.get(this.idCategorie).subscribe(d => this.categorie = d);
  }

  modificationCategorieForm() {
    this.web.categoriesSports.put(this.categorie).subscribe(() => Utilitaire.createToastOk(this.toastCtrl).present(), () => Utilitaire.createAlertErreur(this.alertCtrl)
    )
  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
