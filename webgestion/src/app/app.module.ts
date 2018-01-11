import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {selectListeAttentePage} from "../pages/selectListeAttente/selectListeAttente";
import {selectListeAttenteCreneauPage} from "../pages/selectListeAttenteCreneau/selectListeAttenteCreneau";
import {listeAttentePage} from "../pages/listeAttente/listeAttente";

import {selectListeEffectifPage} from "../pages/selectListeEffectif/selectListeEffectif";
import {selectListeEffectifCreneauPage} from "../pages/selectListeEffectifCreneau/selectListeEffectifCreneau";
import {listeEffectifPage} from "../pages/listeEffectif/listeEffectif";

import {formCreationCategoriePage} from "../pages/formCreationCategorie/formCreationCategorie";
import {selectModificationCategoriePage} from "../pages/selectModificationCategorie/selectModificationCategorie";
import {modificationCategoriePage} from "../pages/modificationCategorie/modificationCategorie";
import {selectSuppressionCategoriePage} from "../pages/selectSuppressionCategorie/selectSuppressionCategorie";

import {formCreationSportPage} from "../pages/formCreationSport/formCreationSport";
import {selectModificationSportPage} from "../pages/selectModificationSport/selectModificationSport";
import {modificationSportPage} from "../pages/modificationSport/modificationSport";
import {selectSuppressionSportPage} from "../pages/selectSuppressionSport/selectSuppressionSport";

import {formCreationActivitePage} from "../pages/formCreationActivite/formCreationActivite";
import {selectModificationActivitePage} from "../pages/selectModificationActivite/selectModificationActivite";
import {modificationActivitePage} from "../pages/modificationActivite/modificationActivite";
import {selectSuppressionActivitePage} from "../pages/selectSuppressionActivite/selectSuppressionActivite";

import {formCreationCreneauPage} from "../pages/formCreationCreneau/formCreationCreneau";
import {selectModificationCreneauPage} from "../pages/selectModificationCreneau/selectModificationCreneau";
import {modificationCreneauPage} from "../pages/modificationCreneau/modificationCreneau";
import {selectSuppressionCreneauPage} from "../pages/selectSuppressionCreneau/selectSuppressionCreneau";

import {formCreationActualitePage} from "../pages/formCreationActualite/formCreationActualite";
import {selectModificationActualitePage} from "../pages/selectModificationActualite/selectModificationActualite";
import {modificationActualitePage} from "../pages/modificationActualite/modificationActualite";
import {selectSuppressionActualitePage} from "../pages/selectSuppressionActualite/selectSuppressionActualite";

import {formCreationResponsablePage} from "../pages/formCreationResponsable/formCreationResponsable";
import {selectVerificationResponsablePage} from "../pages/selectVerificationResponsable/selectVerificationResponsable";
import {verificationResponsablePage} from "../pages/verificationResponsable/verificationResponsable";
import {selectSuppressionResponsablePage} from "../pages/selectSuppressionResponsable/selectSuppressionResponsable";

import {formCreationPersonnePage} from "../pages/formCreationPersonne/formCreationPersonne";
import {selectDesinscriptionPersonnePage} from "../pages/selectDesinscriptionPersonne/selectDesinscriptionPersonne";
import {desinscriptionPersonnePage} from "../pages/desinscriptionPersonne/desinscriptionPersonne";
import {selectSuppressionPersonnePage} from "../pages/selectSuppressionPersonne/selectSuppressionPersonne";

import {selectGestionCategorieTarifPage} from "../pages/selectGestionCategorieTarif/selectGestionCategorieTarif";
import {formCreationCategorieUtilisateurPage} from "../pages/formCreationCategorieUtilisateur/formCreationCategorieUtilisateur";
import {gestionCategorieTarifPage} from "../pages/gestionCategorieTarif/gestionCategorieTarif";
import {selectSuppressionCategorieTarifPage} from "../pages/selectSuppressionCategorieTarif/selectSuppressionCategorieTarif";

import {formCreationLieuPage} from "../pages/formCreationLieu/formCreationLieu";
import {selectModificationLieuPage} from "../pages/selectModificationLieu/selectModificationLieu";
import {modificationLieuPage} from "../pages/modificationLieu/modificationLieu";
import {selectSuppressionLieuPage} from "../pages/selectSuppressionLieu/selectSuppressionLieu";

import {formCreationPiecePage} from "../pages/formCreationPiece/formCreationPiece";
import {selectModificationPiecePage} from "../pages/selectModificationPiece/selectModificationPiece";
import {modificationPiecePage} from "../pages/modificationPiece/modificationPiece";
import {selectSuppressionPiecePage} from "../pages/selectSuppressionPiece/selectSuppressionPiece";
import {HttpClientModule} from "@angular/common/http";
import {WebserviceProvider} from "../common/webservice";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    selectListeAttentePage,
    selectListeAttenteCreneauPage,
    listeAttentePage,

    selectListeEffectifPage,
    selectListeEffectifCreneauPage,
    listeEffectifPage,

    formCreationCategoriePage,
    selectModificationCategoriePage,
    modificationCategoriePage,
    selectSuppressionCategoriePage,

    formCreationSportPage,
    selectModificationSportPage,
    modificationSportPage,
    selectSuppressionSportPage,

    formCreationActivitePage,
    selectModificationActivitePage,
    modificationActivitePage,
    selectSuppressionActivitePage,

    formCreationCreneauPage,
    selectModificationCreneauPage,
    modificationCreneauPage,
    selectSuppressionCreneauPage,

    formCreationActualitePage,
    selectModificationActualitePage,
    modificationActualitePage,
    selectSuppressionActualitePage,

    formCreationResponsablePage,
    selectVerificationResponsablePage,
    verificationResponsablePage,
    selectSuppressionResponsablePage,

    formCreationPersonnePage,
    selectDesinscriptionPersonnePage,
    desinscriptionPersonnePage,
    selectSuppressionPersonnePage,

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
    HttpClientModule,
    FormsModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    selectListeAttentePage,
    selectListeAttenteCreneauPage,
    listeAttentePage,

    selectListeEffectifPage,
    selectListeEffectifCreneauPage,
    listeEffectifPage,

    formCreationCategoriePage,
    selectModificationCategoriePage,
    modificationCategoriePage,
    selectSuppressionCategoriePage,

    formCreationSportPage,
    selectModificationSportPage,
    modificationSportPage,
    selectSuppressionSportPage,

    formCreationActivitePage,
    selectModificationActivitePage,
    modificationActivitePage,
    selectSuppressionActivitePage,

    formCreationCreneauPage,
    selectModificationCreneauPage,
    modificationCreneauPage,
    selectSuppressionCreneauPage,

    formCreationActualitePage,
    selectModificationActualitePage,
    modificationActualitePage,
    selectSuppressionActualitePage,

    formCreationResponsablePage,
    selectVerificationResponsablePage,
    verificationResponsablePage,
    selectSuppressionResponsablePage,

    formCreationPersonnePage,
    selectDesinscriptionPersonnePage,
    desinscriptionPersonnePage,
    selectSuppressionPersonnePage,

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
export class AppModule {
}
