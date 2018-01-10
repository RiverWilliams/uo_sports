import {Component, OnInit} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
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
    Observable.combineLatest(this.search.valueChanges, this.web.sports.getAll(), (search: string, sports: Sport[]) => {
      const s = search.toLowerCase();
      return sports.filter(sport => sport.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
    }).subscribe(d => this.listeSport = d);
  }


  // Suppression d'une Sport
  constructor(public alertCtrl: AlertController, private web: WebserviceProvider) {
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
