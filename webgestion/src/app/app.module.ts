import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { listeInscriptionPage } from "../pages/listeInscription/listeInscription";

import { selectListeAttentePage } from "../pages/selectListeAttente/selectListeAttente";
import { listeAttentePage } from "../pages/listeAttente/listeAttente";

import { selectListeEffectifPage} from "../pages/selectListeEffectif/selectListeEffectif";
import { listeEffectifPage } from "../pages/listeEffectif/listeEffectif";

import { formCreationSportPage } from "../pages/formCreationSport/formCreationSport";
import { selectModificationSportPage } from "../pages/selectModificationSport/selectModificationSport";
import { modificationSportPage } from "../pages/modificationSport/modificationSport";
import { selectSuppressionSportPage } from "../pages/selectSuppressionSport/selectSuppressionSport";

import { formCreationActivitePage } from "../pages/formCreationActivite/formCreationActivite";
import { selectModificationActivitePage } from "../pages/selectModificationActivite/selectModificationActivite";
import { modificationActivitePage } from "../pages/modificationActivite/modificationActivite";
import { selectSuppressionActivitePage } from "../pages/selectSuppressionActivite/selectSuppressionActivite";

import { formCreationActualitePage } from "../pages/formCreationActualite/formCreationActualite";

import { formCreationResponsablePage } from "../pages/formCreationResponsable/formCreationResponsable";
import { selectVerificationResponsablePage } from "../pages/selectVerificationResponsable/selectVerificationResponsable";
import { verificationResponsablePage } from "../pages/verificationResponsable/verificationResponsable";
import { selectSuppressionResponsablePage } from "../pages/selectSuppressionResponsable/selectSuppressionResponsable";

import { formCreationEtudiantPage } from "../pages/formCreationEtudiant/formCreationEtudiant";
import { selectDesinscriptionEtudiantPage } from "../pages/selectDesinscriptionEtudiant/selectDesinscriptionEtudiant";
import { desinscriptionEtudiantPage } from "../pages/desinscriptionEtudiant/desinscriptionEtudiant";
import { selectSuppressionEtudiantPage } from "../pages/selectSuppressionEtudiant/selectSuppressionEtudiant";

import { selectGestionCategorieTarifPage } from "../pages/selectGestionCategorieTarif/selectGestionCategorieTarif";
import { formCreationCategorieUtilisateurPage } from "../pages/formCreationCategorieUtilisateur/formCreationCategorieUtilisateur";
import { gestionCategorieTarifPage } from "../pages/gestionCategorieTarif/gestionCategorieTarif";
import { selectSuppressionCategorieTarifPage } from "../pages/selectSuppressionCategorieTarif/selectSuppressionCategorieTarif";

import { formCreationLieuPage } from "../pages/formCreationLieu/formCreationLieu";
import { selectModificationLieuPage } from "../pages/selectModificationLieu/selectModificationLieu";
import { modificationLieuPage } from "../pages/modificationLieu/modificationLieu";
import { selectSuppressionLieuPage } from "../pages/selectSuppressionLieu/selectSuppressionLieu";

import { formCreationPiecePage } from "../pages/formCreationPiece/formCreationPiece";
import { selectModificationPiecePage } from "../pages/selectModificationPiece/selectModificationPiece";
import { modificationPiecePage } from "../pages/modificationPiece/modificationPiece";
import { selectSuppressionPiecePage } from "../pages/selectSuppressionPiece/selectSuppressionPiece";
import {HttpClientModule} from "../../../webclient/node_modules/@angular/common/http/src/module";
import {WebserviceProvider} from "../../../webclient/src/common/webservice";

@NgModule({
	declarations: [
		MyApp,
		HomePage,

		listeInscriptionPage,
		selectListeAttentePage,
		listeAttentePage,

		selectListeEffectifPage,
		listeEffectifPage,

		formCreationSportPage,
		selectModificationSportPage,
		modificationSportPage,
		selectSuppressionSportPage,

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
		selectSuppressionEtudiantPage,

		selectGestionCategorieTarifPage,
		formCreationCategorieUtilisateurPage,
		gestionCategorieTarifPage,
		selectSuppressionCategorieTarifPage,

		formCreationLieuPage,
		selectModificationLieuPage,
		modificationLieuPage,
		selectSuppressionLieuPage,

		formCreationPiecePage,
		selectModificationPiecePage,
		modificationPiecePage,
		selectSuppressionPiecePage

	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
    HttpClientModule
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

		formCreationSportPage,
		selectModificationSportPage,
		modificationSportPage,
		selectSuppressionSportPage,

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
		selectSuppressionEtudiantPage,

		selectGestionCategorieTarifPage,
		formCreationCategorieUtilisateurPage,
		gestionCategorieTarifPage,
		selectSuppressionCategorieTarifPage,

		formCreationLieuPage,
		selectModificationLieuPage,
		modificationLieuPage,
		selectSuppressionLieuPage,

		formCreationPiecePage,
		selectModificationPiecePage,
		modificationPiecePage,
		selectSuppressionPiecePage

	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    WebserviceProvider
	]
})
export class AppModule {}
