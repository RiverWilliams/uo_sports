import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Activite, Sport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-modificationActivite',
  templateUrl: 'modificationActivite.html'
})

export class modificationActivitePage implements OnInit {
  private idActivite;

  ngOnInit(): void {
    this.web.activites.get(this.idActivite).subscribe(d => this.activite = d);
    this.web.sports.getAll().subscribe(d => this.sports = d.sort(Comparateur.Sport.nom));
    this.web.activites.getSports(this.idActivite).subscribe(d => this.nouveauSport = Array.from(this.sportActuel = d));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    this.idActivite = navParams.get("idActivite");
  }

  activite: Activite;
  private sportActuel: Sport[];
  nouveauSport: Sport[];
  sports: Sport[];

  compareFn(a: any, b: any) {
    return a.id === b.id;
  }

  modificationActiviteForm() {
    console.log(this.activite)

    this.web.activites.put(this.activite).subscribe();

    const del = this.sportActuel.filter(value => !this.nouveauSport.find(value2 => value2.id === value.id));
    const add = this.nouveauSport.filter(value => !this.sportActuel.find(value2 => value2.id === value.id));

    del.forEach(value => this.web.activites.deleteSport(this.idActivite, value.id).subscribe());
    add.forEach(value => this.web.activites.addSport(this.idActivite, value.id).subscribe());
    Utilitaire.createToastOk(this.toastCtrl).present();

  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
