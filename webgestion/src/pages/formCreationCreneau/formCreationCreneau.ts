import {Component, OnInit} from '@angular/core';
import {Activite, Lieu, Niveau, Responsable} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Adaptateur, CreneauJSON} from "../../common/adaptateur";
import {Utilitaire} from "../../common/utilitaire";
import {AlertController, ToastController} from "ionic-angular";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-formcreationcreneau',
  templateUrl: 'formCreationCreneau.html'
})
export class formCreationCreneauPage implements OnInit {

  ngOnInit(): void {
    this.web.activites.getAll().subscribe(d => this.activites = d.sort(Comparateur.Activite.nom));
    this.web.responsables.getAll().subscribe(d => this.responsables = d.sort(Comparateur.Responsable.nomPrenom));
    this.web.niveux.getAll().subscribe(d => this.niveaux = d.sort(Comparateur.Niveau.nom));
    this.web.lieux.getAll().subscribe(d => this.lieux = d.sort(Comparateur.Lieu.ville));
  }

  constructor(private web: WebserviceProvider, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  activites: Activite[];

  responsables: Responsable[];

  jours: number[] = Array.of(0, 1, 2, 3, 4, 5, 6);

  niveaux: Niveau[];

  lieux: Lieu[];

  creationCreneauForm(creneau: CreneauJSON) {
    creneau.heureDebut += ":00";
    creneau.heureFin += ":00";
    console.log(creneau);
    this.web.creneaux.post(Adaptateur.Creneau.fromJSON(creneau)).subscribe(() => Utilitaire.createToastOk(this.toastCtrl).present(),
      (err) => {
        console.log(err);
        Utilitaire.createAlertErreur(this.alertCtrl).present()
      });
  };

}
