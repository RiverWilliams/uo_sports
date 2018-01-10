import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {CategorieSport, Sport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Utilitaire} from "../../common/utilitaire";

@Component({
  selector: 'page-modificationsport',
  templateUrl: 'modificationSport.html'
})

export class modificationSportPage implements OnInit {
  public idSport;
  // Modification d'un sport
  sport: Sport = {nom: ''};
  idCategoriesDuSport: CategorieSport[] = [];
  categoriesSports: CategorieSport[];
  nouvelleCategorie: CategorieSport[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private toastCtrl: ToastController) {
    this.idSport = navParams.get("idSport");
  }

  ngOnInit(): void {
    this.web.sports.get(this.idSport).subscribe(d => this.sport = d);
    this.web.categoriesSports.getAll().subscribe(d => this.categoriesSports = d);
    this.web.sports.getCategoriesSport(this.idSport).subscribe(d => this.nouvelleCategorie = Array.from(this.idCategoriesDuSport = d));
  }

  compareFn(a: any, b: any) {
    return a.id === b.id;
  }

  modificationSportForm() {
    this.web.sports.put(this.sport).subscribe();

    const del = this.categoriesSports.filter(value => !this.nouvelleCategorie.find(value2 => value2.id === value.id));
    const add = this.nouvelleCategorie.filter(value => !this.categoriesSports.find(value2 => value2.id === value.id));

    del.forEach(value => this.web.sports.deleteCategoriesSport(this.idSport, value.id).subscribe());
    add.forEach(value => this.web.sports.addCategorie(this.idSport, value.id).subscribe());
    Utilitaire.createToastOk(this.toastCtrl).present();
  };

  goback() {
    this.navCtrl.push(HomePage);
  }
}
