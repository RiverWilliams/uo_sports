import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from "ionic-angular";
import {WebserviceProvider} from "../../common/webservice";
import {Activite, Sport} from "../../common/model";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-formcreationactivite',
  templateUrl: 'formCreationActivite.html'
})
export class formCreationActivitePage implements OnInit {
  ngOnInit(): void {
    this.web.sports.getAll().subscribe(d => this.sports = d.sort(Comparateur.Sport.nom));
  }

  sports: Sport[];

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private web: WebserviceProvider) {
  }

  creationActiviteForm(value) {
    let a: Activite = {nom: value.nom};
    this.web.activites.post(a).subscribe((id) => {
        if (Array.isArray(value.sport))
          value.sports.forEach(s => this.web.activites.addSport(id, s.id).subscribe(() => {
            }, () => Utilitaire.createAlertErreur(this.alertCtrl).present()
          ));
        Utilitaire.createToastOk(this.toastCtrl).present();
      },
      () => Utilitaire.createAlertErreur(this.alertCtrl).present()
    );
  };

}
