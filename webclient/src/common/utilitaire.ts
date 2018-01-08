import {AlertController} from "ionic-angular";

export namespace Utilitaire {
    export function createAlertErreur(alertCtrl: AlertController) {
        return alertCtrl.create({
            title: "Erreur",
            message: "Une erreur c'est produite veuillez réessayer",
            buttons: [{
                text: 'OK',
                role: 'cancel',
                handler: () => true
            }]
        });
    }
}