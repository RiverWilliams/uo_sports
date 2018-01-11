import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormControl} from "@angular/forms";
import {modificationLieuPage} from '../modificationLieu/modificationLieu';

@Component({
  selector: 'page-selectmodificationlieu',
  templateUrl: 'selectModificationLieu.html'
})

export class selectModificationLieuPage {

  search = new FormControl();

  constructor(public navCtrl: NavController) {

  }


  SelectModificationLieu() {

    this.navCtrl.push(modificationLieuPage,);
  };
}
