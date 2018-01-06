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

import {formCreationActivitePage} from "../pages/formCreationActivite/formCreationActivite";
import {selectModificationActivitePage} from "../pages/selectModificationActivite/selectModificationActivite";
import {modificationActivitePage} from "../pages/modificationActivite/modificationActivite";
import {selectSuppressionActivitePage} from "../pages/selectSuppressionActivite/selectSuppressionActivite";

import {formCreationActualitePage} from "../pages/formCreationActualite/formCreationActualite";

import {formCreationResponsablePage} from "../pages/formCreationResponsable/formCreationResponsable";
import {selectVerificationResponsablePage} from "../pages/selectVerificationResponsable/selectVerificationResponsable";
import {verificationResponsablePage} from "../pages/verificationResponsable/verificationResponsable";
import {selectSuppressionResponsablePage} from "../pages/selectSuppressionResponsable/selectSuppressionResponsable";

import {formCreationEtudiantPage} from "../pages/formCreationEtudiant/formCreationEtudiant";
import {selectDesinscriptionEtudiantPage} from "../pages/selectDesinscriptionEtudiant/selectDesinscriptionEtudiant";
import {desinscriptionEtudiantPage} from "../pages/desinscriptionEtudiant/desinscriptionEtudiant";
import {selectSuppressionEtudiantPage} from "../pages/selectSuppressionEtudiant/selectSuppressionEtudiant";

@NgModule({
	declarations: [
		MyApp,
		HomePage,

		listeInscriptionPage,
		selectListeAttentePage,
		listeAttentePage,

		selectListeEffectifPage,
		listeEffectifPage,

		formCreationActivitePage,
		selectModificationActivitePage,
		modificationActivitePage,
		selectSuppressionActivitePage,

		formCreationActualitePage,

		formCreationResponsablePage,
		selectVerificationResponsablePage,
		verificationResponsablePage,
		selectSuppressionResponsablePage,

		formCreationEtudiantPage,
		selectDesinscriptionEtudiantPage,
		desinscriptionEtudiantPage,
		selectSuppressionEtudiantPage
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

		formCreationActivitePage,
		selectModificationActivitePage,
		modificationActivitePage,
		selectSuppressionActivitePage,

		formCreationActualitePage,

		formCreationResponsablePage,
		selectVerificationResponsablePage,
		verificationResponsablePage,
		selectSuppressionResponsablePage,

		formCreationEtudiantPage,
		selectDesinscriptionEtudiantPage,
		desinscriptionEtudiantPage,
		selectSuppressionEtudiantPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
