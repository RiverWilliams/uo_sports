import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';


import {HomePage} from '../pages/home/home';
import {ActuPage} from '../pages/actualite/actualite';
import {CartePage} from '../pages/carte/carte';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('myNav') nav: NavController
    public rootPage = HomePage;

    // Wait for the components in MyApp's template to be initialized
    // In this case, we are waiting for the Nav with reference variable of "#myNav"


    constructor(private menu: MenuController) {
    }

    ngOnInit() {
        this.nav.push(HomePage);
    }

    openPage(p) {
        switch (p) {
            case 1:
                this.nav.setRoot(ActuPage);
                break;
            case 2:
                this.nav.setRoot(HomePage);
                break;
            case 3:
                this.nav.setRoot(CartePage);
                break;
        }
        this.menu.close();
    }
}


  
    

