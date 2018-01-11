import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationActualitePage} from '../modificationActualite/modificationActualite';
import {Activite} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-selectmodificationactualite',
  templateUrl: 'selectModificationActualite.html'
})

export class selectModificationActualitePage implements OnInit {
  search = new FormControl();
  listeActivite: Activite[];

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {

  }

  ngOnInit(): void {
/*    this.web.activites.getAll().subscribe(d => this.listeActivite = d.sort(Comparateur.Activite.nom));
    this.web.activites.getAll().subscribe(d => this.listeActivite = d.sort(Comparateur.Activite.nom));
    Observable.combineLatest(this.search.valueChanges, this.web.activites.getAll(), (search: string, activites: Activite[]) => {
      const s = search.toLowerCase();
      return activites.filter(activite => activite.nom.toLowerCase().includes(s)).sort(Comparateur.Sport.nom);
    }).subscribe(d => this.listeActivite = d);*/
  }

  SelectModificationActivite(id) {
    this.navCtrl.push(modificationActualitePage, {idActualite: id});
    console.log("coucou")
  };
}
