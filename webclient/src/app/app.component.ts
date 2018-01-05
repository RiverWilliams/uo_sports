import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';


import {HomePage} from '../pages/home/home';
import {PanierPage} from "../pages/panier/panier";

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild('myNav') nav: NavController
   public rootPage = HomePage;

   // Wait for the components in MyApp's template to be initialized
   // In this case, we are waiting for the Nav with reference variable of "#myNav"
   

   ngOnInit() {
      // Let's navigate from TabsPage to Page1
      this.nav.push(HomePage);
   }

   openPage() {
      this.nav.setRoot(PanierPage);
   }
}


  
    

