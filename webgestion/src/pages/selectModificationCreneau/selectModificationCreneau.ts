import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationCreneauPage} from '../modificationCreneau/modificationCreneau';
import {Creneau} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Comparateur} from "../../common/comparateur";

@Component({
  selector: 'page-selectmodificationcreneau',
  templateUrl: 'selectModificationCreneau.html'
})

export class selectModificationCreneauPage implements OnInit {

  ngOnInit(): void {
    this.web.creneaux.getAll().subscribe(d => this.creneaux = d.sort(Comparateur.Creneau.activiteChronologique));
    Observable.combineLatest(this.search.valueChanges, this.web.creneaux.getAll(), (search: string, creneaux: Creneau[]) => {
      const s = search.toLowerCase();
      return creneaux.filter(v => (v.activite).nom.toLowerCase().includes(s)).sort(Comparateur.Creneau.activiteChronologique);
    }).subscribe(d => this.creneaux = d);
  }

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {
  }

  search = new FormControl();
  creneaux: Creneau[];

  SelectModificationCreneau(creneau: Creneau) {
    this.navCtrl.push(modificationCreneauPage, {idCreneau: creneau.id});
  };
}
