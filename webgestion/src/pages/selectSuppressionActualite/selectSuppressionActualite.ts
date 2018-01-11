import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from 'ionic-angular';
import {Actualite} from "../../common/model";
import {FormControl} from "@angular/forms";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-selectsuppressionactualite',
  templateUrl: 'selectSuppressionActualite.html'
})
export class selectSuppressionActualitePage implements OnInit {

  search = new FormControl();
  listeActualite: Actualite[];

  constructor(public  alertCtrl: AlertController, private  web: WebserviceProvider, private  toastCtrl: ToastController) {

  }

  ngOnInit(): void {
    this.web.actualites.getAll().subscribe(d => this.listeActualite = d.sort(Comparateur.Actualite.debut));
    Observable.combineLatest(this.search.valueChanges, this.web.actualites.getAll(), (search: string, actualites: Actualite[]) => {
      const s = search.toLowerCase();
      return actualites.filter(actualite => actualite.titre.toLowerCase().includes(s)).sort(Comparateur.Actualite.debut);
    }).subscribe(d => this.listeActualite = d);
  }

  SupprimerActualite(actualite: Actualite) {
 /*   let alert = this.alertCtrl.create({
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
    alert.present();*/
  }
}
