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
import {PanierPage} from '../pages/home/panier';
import {SeancePage} from '../pages/home/seance';
import {InscrPage} from '../pages/home/inscr';
import {WebserviceProvider} from '../common/webservice';
import {HttpClientModule} from "@angular/common/http";
import {PanierCardComponent} from "../components/panier-card/panier-card";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ActiviteCardComponent,
        PanierCardComponent,
        DayOfWeekPipe,
        SeancePage,
        PanierPage,
        InscrPage
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
        SeancePage,
        PanierPage,
        InscrPage
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
