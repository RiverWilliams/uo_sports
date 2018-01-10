import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Activite, Lieu, Niveau, Responsable} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Adaptateur, CreneauJSON} from "../../common/adaptateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-modificationcreneau',
  templateUrl: 'modificationCreneau.html'
})

export class modificationCreneauPage implements OnInit {
  ngOnInit(): void {
    let idCreneau: number = this.navParams.get("idCreneau");
    this.web.creneaux.get(idCreneau).subscribe(d => this.creneau = Adaptateur.Creneau.toJSON(d));
    this.web.activites.getAll().subscribe(d => this.activites = d.sort(Comparateur.Activite.nom));
    this.web.responsables.getAll().subscribe(d => this.responsables = d.sort(Comparateur.Responsable.nomPrenom));
    this.web.niveux.getAll().subscribe(d => this.niveaux = d.sort(Comparateur.Niveau.nom));
    this.web.lieux.getAll().subscribe(d => this.lieux = d.sort(Comparateur.Lieu.ville));
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  modificationCreneauForm() {
    console.log(this.creneau);
    this.web.creneaux.put(Adaptateur.Creneau.fromJSON(this.creneau)).subscribe(() => Utilitaire.createToastOk(this.toastCtrl).present(),
      () => Utilitaire.createAlertErreur(this.alertCtrl).present());
  };

  creneau: CreneauJSON;

  activites: Activite[];

  responsables: Responsable[];

  jours: number[] = Array.of(0, 1, 2, 3, 4, 5, 6);

  niveaux: Niveau[];

  lieux: Lieu[];

  compareRef(a: any, b: any): boolean {
    return a.id === b.id;
  }

  goback() {
    this.navCtrl.push(HomePage);
  }
}
