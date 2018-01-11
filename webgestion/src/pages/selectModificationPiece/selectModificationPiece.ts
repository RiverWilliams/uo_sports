import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {modificationPiecePage} from '../modificationPiece/modificationPiece';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-selectmodificationpiece',
  templateUrl: 'selectModificationPiece.html'
})

export class selectModificationPiecePage {

  search = new FormControl();

  constructor(public navCtrl: NavController) {

  }


  SelectModificationPiece() {
    this.navCtrl.push(modificationPiecePage,);
  };
}
