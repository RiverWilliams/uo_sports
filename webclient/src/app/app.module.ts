import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ActiviteCardComponent} from "../components/activite-card/activite-card";
import {DayOfWeekPipe} from "../pipes/day-of-week/day-of-week";
import {PanierProvider} from '../providers/panier/panier';
import {PanierPage} from '../pages/panier/panier';
import {SeancePage} from '../pages/seance/seance';
import {InscrPage} from '../pages/inscr/inscr';
import {ActuPage} from '../pages/actualite/actualite';
import {WebserviceProvider} from '../common/webservice';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common"
import {PanierCardComponent} from "../components/panier-card/panier-card";
import {ActuCardComponent} from "../components/actualite-card/actualite-card";
import {FiltrePage} from "../pages/filtre/filtre";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ActiviteCardComponent,
        PanierCardComponent,
        ActuCardComponent,
        DayOfWeekPipe,
        SeancePage,
        PanierPage,
        InscrPage,
        ActuPage,
        FiltrePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        CommonModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ActiviteCardComponent,
        PanierCardComponent,
        ActuCardComponent,
        SeancePage,
        PanierPage,
        InscrPage,
        ActuPage,
        FiltrePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PanierProvider,
        WebserviceProvider
    ]
})
export class AppModule {
}
