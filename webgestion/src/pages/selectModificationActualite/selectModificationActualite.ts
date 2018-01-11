import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationActualitePage} from '../modificationActualite/modificationActualite';
import {Actualite} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {FormControl} from "@angular/forms";
import {Comparateur} from "../../common/comparateur";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-selectmodificationactualite',
  templateUrl: 'selectModificationActualite.html'
})

export class selectModificationActualitePage implements OnInit {
  search = new FormControl();
  listeActualite: Actualite[];

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {

  }

  ngOnInit(): void {
    this.web.actualites.getAll().subscribe(d => this.listeActualite = d.sort(Comparateur.Actualite.debut));
    Observable.combineLatest(this.search.valueChanges, this.web.actualites.getAll(), (search: string, actualites: Actualite[]) => {
      const s = search.toLowerCase();
      return actualites.filter(actualite => actualite.titre.toLowerCase().includes(s)).sort(Comparateur.Actualite.debut);
    }).subscribe(d => this.listeActualite = d);
  }

  SelectModificationActualite(id: number) {
    this.navCtrl.push(modificationActualitePage, {idActualite: id});
  };
}
