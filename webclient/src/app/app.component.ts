import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SeancePage} from '../pages/home/seance';
import { NavController } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
@Component({
   template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
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
      this.nav.push(SeancePage);
   }
}


  
    

