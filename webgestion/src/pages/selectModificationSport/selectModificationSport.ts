import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationSportPage} from '../modificationSport/modificationSport';
import {Sport} from "../../common/model";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/combineLatest";
import {WebserviceProvider} from "../../common/webservice";

@Component({
  selector: 'page-selectmodificationsport',
  templateUrl: 'selectModificationSport.html'
})

export class selectModificationSportPage implements OnInit {

  listeSport: Sport[];
  search = new FormControl();

  constructor(public navCtrl: NavController, private web: WebserviceProvider) {

  }

  ngOnInit(): void {
    this.web.sports.getAll().subscribe(d => this.listeSport = d);
    Observable.combineLatest(this.search.valueChanges, this.web.sports.getAll(), (search: string, sports: Sport[]) => {
      const s = search.toLowerCase();
      return sports.filter(sport => sport.nom.toLowerCase().includes(s));
    }).subscribe(d => this.listeSport = d);
  }

  SelectModificationSport(id: number) {
    this.navCtrl.push(modificationSportPage, {idSport: id});
  };
}
