import {Component, OnInit} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SeancePage} from './seance';
import {PanierPage} from './panier';
import {Activite} from '../../common/model'
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements  OnInit {

    activites: Activite[];

    ngOnInit(): void {
        this.web.activites.getAll().subscribe(data => this.activites = data.sort(Comparateur.Activite.nom));
    }

	public page2 : any;
  constructor(public navCtrl: NavController,  public menu: MenuController, private web: WebserviceProvider) {
		this.page2 = PanierPage;
        menu.enable(true);
  }

  naviguer(p: Activite):void{
      this.navCtrl.push(SeancePage, {
          paramPasse: p
      })
  }

  ouvreMenu(evt){
      if(evt === "filtre"){
          this.menu.enable(true, 'filtre');
          this.menu.enable(false, 'menu');
      }else{
          this.menu.enable(true, 'menu');
          this.menu.enable(false, 'filtre');
      }
      this.menu.toggle();
  }

}
