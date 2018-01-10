import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from 'ionic-angular';
import {CategorieSport} from "../../common/model";
import {Utilitaire} from "../../common/utilitaire";
import {WebserviceProvider} from "../../common/webservice";
import {FormControl} from "@angular/forms";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-selectsuppressioncategorie',
  templateUrl: 'selectSuppressionCategorie.html'
})
export class selectSuppressionCategoriePage implements OnInit {
  listeCategorie: CategorieSport[];

  // Suppression d'une catégorie
  constructor(public alertCtrl: AlertController, private web: WebserviceProvider, private toastCtrl: ToastController) {
  }

  ngOnInit(): void {
    this.web.categoriesSports.getAll().subscribe(d => this.listeCategorie = d);
    this.search.valueChanges.subscribe((search) => {
      const s = search.toLowerCase();
      this.web.categoriesSports.getAll().subscribe(categorie => {
        this.listeCategorie = categorie.filter(v => v.nom.toLowerCase().includes(s)).sort(Comparateur.CategorieSport.nom);
      });
    });
  }

  search = new FormControl();

  SupprimerCategorie(categorie: CategorieSport) {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sûr de supprimer cette catégorie?',
      message: categorie.nom,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.web.categoriesSports.delete(categorie.id).subscribe(() => {
              Utilitaire.createToastOk(this.toastCtrl).present();
              this.search.setValue(this.search.value, {emitEvent: true});
            }, (err) => {
              const alert2 = Utilitaire.createAlertErreur(this.alertCtrl);
              if (err.error.erreur) alert2.setMessage(err.error.erreur.message);
              alert2.present();
            });
            return true;
          }
        }
      ]
    });
    alert.present();
  }
}
