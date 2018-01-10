import {AlertController, ToastController} from "ionic-angular";

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

    export function createToastOk(toastCtrl: ToastController) {
        return toastCtrl.create({
            message: "Opération réussie",
            duration: 3000
        });
    }
}