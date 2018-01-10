import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationCategoriePage} from '../modificationCategorie/modificationCategorie';
import {CategorieSport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-selectmodificationcategorie',
  templateUrl: 'selectModificationCategorie.html'
})

export class selectModificationCategoriePage implements OnInit {


  ngOnInit(): void {
    this.web.categoriesSports.getAll().subscribe(d => this.listeCategorie = d);
    Observable.combineLatest(this.search.valueChanges, this.web.categoriesSports.getAll(), (search: string, categorieSports: CategorieSport[]) => {
      const s = search.toLowerCase();
      return categorieSports.filter(v => v.nom.toLowerCase().includes(s)).sort(Comparateur.CategorieSport.nom);
    }).subscribe(d => this.listeCategorie = d);
  }

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {
  }

  listeCategorie: CategorieSport[];
  search = new FormControl();


  SelectModificationCategorie(id: number) {
    this.navCtrl.push(modificationCategoriePage, {idCategorie: id});
  };
}
