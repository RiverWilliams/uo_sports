import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SeancePage} from './seance';
import {PanierPage} from './panier';
import {Activite} from '../../common/model'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

activites: Activite [] = [
    {
        id:0,
        nom:"Athletisme"
    },{
        id:1,
        nom:"Aquagym"
    },{
        id:2,
        nom:"Badminton"
    }
];

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
