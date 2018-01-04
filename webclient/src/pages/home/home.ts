import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SeancePage} from './seance';
import {PanierPage} from './panier';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



	public page2 : any;
  constructor(public navCtrl: NavController) {
		this.page2 = PanierPage;
  }

  naviguer(p){
      this.navCtrl.push(SeancePage, {
          paramPasse: p
      })
  }

}
