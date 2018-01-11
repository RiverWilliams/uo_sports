import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {selectListeAttenteCreneauPage} from '../selectListeAttenteCreneau/selectListeAttenteCreneau';
import {Activite} from "../../common/model";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/combineLatest";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-selectlisteattente',
  templateUrl: 'selectListeAttente.html'
})
export class selectListeAttentePage {

  listeActivite: Activite[];
  search = new FormControl();

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {

  }

  ngOnInit(): void {
    Observable.combineLatest(this.search.valueChanges, this.web.activites.getAll(), (search: string, activites: Activite[]) => {
      const s = search.toLowerCase();
      return activites.filter(activite => activite.nom.toLowerCase().includes(s)).sort(Comparateur.Activite.nom);
    }).subscribe(d => this.listeActivite = d);
    this.search.setValue('', {emitEvent: true});
  }

  ListeAttente(id: number) {
    this.navCtrl.push(selectListeAttenteCreneauPage, {idActivite: id});
  };
}
