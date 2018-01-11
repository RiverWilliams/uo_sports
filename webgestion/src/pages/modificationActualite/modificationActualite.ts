import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Actualite} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-modificationactualite',
  templateUrl: 'modificationActualite.html'
})

export class modificationActualitePage implements OnInit {
  public idSport;
  // Modification d'une actualité


  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController) {
    //this.idSport = navParams.get("idSport");
  }

  ngOnInit(): void {
  /*  this.web.sports.get(this.idSport).subscribe(d => this.sport = d);
    this.web.categoriesSports.getAll().subscribe(d => this.categoriesSports = d.sort(Comparateur.CategorieSport.nom));
    this.web.sports.getCategoriesSport(this.idSport).subscribe(d => this.nouvelleCategorie = Array.from(this.categoriesDuSport = d));
    */
  }

  compareFn(a: any, b: any) {
    return a.id === b.id;
  }

  modificationActualiteForm() {
  /*  this.web.sports.put(this.sport).subscribe();

    const del = this.categoriesSports.filter(value => !this.nouvelleCategorie.find(value2 => value2.id === value.id));
    const add = this.nouvelleCategorie.filter(value => !this.categoriesSports.find(value2 => value2.id === value.id));

    del.forEach(value => this.web.sports.deleteCategoriesSport(this.idSport, value.id).subscribe());
    add.forEach(value => this.web.sports.addCategorie(this.idSport, value.id).subscribe());
    Utilitaire.createToastOk(this.toastCtrl).present();*/
  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
