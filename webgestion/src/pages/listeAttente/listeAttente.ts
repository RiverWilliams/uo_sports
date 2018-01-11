import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Inscription} from '../../common/model';
import {HomePage} from '../home/home';
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/combineAll";

@Component({
  selector: 'page-listeAttente',
  templateUrl: 'listeAttente.html'
})

export class listeAttentePage implements OnInit {
  public idCreneau;

  listeInscription: Inscription[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController) {
    this.idCreneau = navParams.get("idCreneau");
  }

  ngOnInit(): void {
    this.web.creneaux.getEnAttentes(this.idCreneau).subscribe(f => this.listeInscription = f);
  }

  ListeAttenteForm() {
    const valider = this.listeInscription.filter(value => !value.enAttente);
    Observable.of(valider).flatMap(v => v).map(value => this.web.inscriptions.put(value)).combineAll().subscribe(() => Utilitaire.createToastOk(this.toastCtrl).present(), (err) => {
      const toast = this.toastCtrl.create({duration: 5000, message: "Une erreur est survenue."});
      if (err.error.erreur) toast.setMessage(err.error.erreur.message);
      toast.present();
    }, () => this.web.creneaux.getEnAttentes(this.idCreneau).subscribe(f => this.listeInscription = f));
  }

  goback() {
    this.navCtrl.push(HomePage);
  }
}
