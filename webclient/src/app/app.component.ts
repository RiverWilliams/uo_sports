import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';


import {HomePage} from '../pages/home/home';
import {ActuPage} from "../pages/actualite/actualite";

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild('myNav') nav: NavController
   public rootPage = HomePage;

   // Wait for the components in MyApp's template to be initialized
   // In this case, we are waiting for the Nav with reference variable of "#myNav"
   

   ngOnInit() {
      this.nav.push(HomePage);
   }

   openPage(p) {
    if(p==1){
      this.nav.setRoot(ActuPage);
    }
    if(p==2){
      this.nav.setRoot(HomePage);
    }
    
   }
}


  
    

