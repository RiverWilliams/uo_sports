import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from 'ionic-angular';
import {Creneau} from "../../common/model";
import {FormControl} from "@angular/forms";
import {Comparateur} from "../../common/comparateur";
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-selectsuppressioncreneau',
  templateUrl: 'selectSuppressionCreneau.html'
})
export class selectSuppressionCreneauPage implements OnInit {

  search = new FormControl();
  creneaux: Creneau[];

  // Suppression d'un creneau
  constructor(public alertCtrl: AlertController, private web: WebserviceProvider, private toastCtrl: ToastController) {
  }

  ngOnInit(): void {
    this.web.creneaux.getAll().subscribe(d => this.creneaux = d.sort(Comparateur.Creneau.activiteChronologique));
    this.search.valueChanges.subscribe(search => this.web.creneaux.getAll().subscribe(creneaux => {
      const s = search.toLowerCase();
      return this.creneaux = creneaux.filter(v => (v.activite).nom.toLowerCase().includes(s)).sort(Comparateur.Creneau.activiteChronologique);
    }));
  }

  SupprimerCreneau(creneau: Creneau) {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sûr de vouloir supprimer ce créneau?',
      message: creneau.activite.nom,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.web.creneaux.delete(creneau.id).subscribe(() => {
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
