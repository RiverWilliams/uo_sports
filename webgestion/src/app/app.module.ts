import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {listeInscriptionPage} from "../pages/listeInscription/listeInscription";

import {selectListeAttentePage} from "../pages/selectListeAttente/selectListeAttente";
import {listeAttentePage} from "../pages/listeAttente/listeAttente";

import {selectListeEffectifPage} from "../pages/selectListeEffectif/selectListeEffectif";
import {listeEffectifPage} from "../pages/listeEffectif/listeEffectif";

import {selectModificationActivitePage} from "../pages/selectModificationActivite/selectModificationActivite";
import {modificationActivitePage} from "../pages/modificationActivite/modificationActivite";
import {selectSuppressionActivitePage} from "../pages/selectSuppressionActivite/selectSuppressionActivite";

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		listeInscriptionPage,
		selectListeAttentePage,
		listeAttentePage,
		selectListeEffectifPage,
		listeEffectifPage,
		selectModificationActivitePage,
		modificationActivitePage,
		selectSuppressionActivitePage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		listeInscriptionPage,
		selectListeAttentePage,
		listeAttentePage,
		selectListeEffectifPage,
		listeEffectifPage,
		selectModificationActivitePage,
		modificationActivitePage,
		selectSuppressionActivitePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
