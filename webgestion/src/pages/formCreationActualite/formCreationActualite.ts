import {Component, OnInit} from '@angular/core';
import {Sport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Adaptateur} from "../../common/adaptateur";
import {AlertController} from "ionic-angular";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-formcreationactualite',
  templateUrl: 'formCreationActualite.html'
})
export class formCreationActualitePage implements OnInit {
  ngOnInit(): void {
    this.web.sports.getAll().subscribe(d => this.sports = d);
  }

  sports: Sport[];

  valider: boolean = false;

  constructor(private web: WebserviceProvider, private alertCtrl: AlertController) {
  }

  creationActualiteForm(a) {
    this.valider = true;
    this.web.actualites.post({
      dateFin: Adaptateur.stringToDate(a.dateFin),
      dateDebut: Adaptateur.stringToDate(a.dateDebut),
      descCourte: a.descCourte,
      descLongue: a.descLongue,
      titre: a.titre,
      image: a.image,
      dateMiseEnLigne: new Date()
    }).subscribe(id => {
      if (Array.isArray(a.sports))
        a.sports.forEach(s => this.web.actualites.addSport(id, s).subscribe())
      this.alertCtrl.create({
        title: "Confirmation",
        message: "Actualité crée",
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
    });

  };

}
