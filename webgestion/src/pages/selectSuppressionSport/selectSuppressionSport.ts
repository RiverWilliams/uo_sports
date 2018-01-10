import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {FormControl} from "@angular/forms";
import {WebserviceProvider} from "../../common/webservice";
import {Sport} from "../../common/model";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-selectsuppressionsport',
  templateUrl: 'selectSuppressionSport.html'
})
export class selectSuppressionSportPage implements OnInit {
  search = new FormControl();
  listeSport: Sport[];

  ngOnInit(): void {
    this.web.sports.getAll().subscribe(d => this.listeSport = d);
    this.search.valueChanges.subscribe((search) => {
      const s = search.toLowerCase();
      this.web.sports.getAll().subscribe(sports => {
        this.listeSport = sports.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
      });
    });
  }

// Suppression d'une Sport
  constructor(public  alertCtrl: AlertController, private  web: WebserviceProvider, private  toastCtrl: ToastController) {
  }

  SupprimerSport(sport: Sport) {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sûr de supprimer le sport?',
      message: sport.nom,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.web.sports.delete(sport.id).subscribe(() => {
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
