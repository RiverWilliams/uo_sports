import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {WebserviceProvider} from "../../common/webservice";
import {Sport} from "../../common/model";
import {ActualiteJSON, Adaptateur} from "../../common/adaptateur";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-modificationactualite',
  templateUrl: 'modificationActualite.html'
})

export class modificationActualitePage implements OnInit {
  public idActualite;
  actualite: ActualiteJSON;
  nouveauSport: Sport[];
  ancienSport: Sport[];

  // Modification d'une actualité

  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController) {
    this.idActualite = navParams.get("idActualite");
  }

  ngOnInit(): void {
    this.web.actualites.get(this.idActualite).subscribe(d => this.actualite = Adaptateur.Actualite.toJSON(d));
    this.web.sports.getAll().subscribe(value => this.ancienSport = value.sort(Comparateur.Sport.nom));
    this.web.actualites.getSports(this.idActualite).subscribe(value => this.nouveauSport = value.sort(Comparateur.Sport.nom));
  }

  compareFn(a: any, b: any) {
    return a.id === b.id;
  }

  modificationActualiteForm() {
    console.log(this.actualite);

    this.web.actualites.put(Adaptateur.Actualite.fromJSON(this.actualite)).subscribe();

    const del = this.ancienSport.filter(value => !this.nouveauSport.find(value2 => value2.id === value.id));
    const add = this.nouveauSport.filter(value => !this.ancienSport.find(value2 => value2.id === value.id));

    del.forEach(value => this.web.actualites.deleteSport(this.idActualite, value.id).subscribe());
    add.forEach(value => this.web.actualites.addSport(this.idActualite, value.id).subscribe());
    Utilitaire.createToastOk(this.toastCtrl).present();
  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
