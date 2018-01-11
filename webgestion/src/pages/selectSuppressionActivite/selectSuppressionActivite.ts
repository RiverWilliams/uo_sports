import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from 'ionic-angular';
import {Activite} from "../../common/model";
import {FormControl} from "@angular/forms";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-selectsuppressionactivite',
  templateUrl: 'selectSuppressionActivite.html'
})
export class selectSuppressionActivitePage implements OnInit {

  search = new FormControl();
  listeActivite: Activite[];

  ngOnInit(): void {
    this.search.valueChanges.subscribe((search) => {
      const s = search.toLowerCase();
      this.web.activites.getAll().subscribe(activite => {
        this.listeActivite = activite.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Activite.nom);
      });
    });
    this.search.setValue('', {emitEvent: true});
  }

  constructor(public  alertCtrl: AlertController, private  web: WebserviceProvider, private  toastCtrl: ToastController) {

  }

  SupprimerActivite(activite: Activite) {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sûr de supprimer l\'activite?',
      message: activite.nom,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.web.activites.delete(activite.id).subscribe(() => {
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
