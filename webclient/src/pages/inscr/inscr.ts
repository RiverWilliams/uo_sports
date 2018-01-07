import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {CategoriePersonne, Inscription, Personne} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";


@Component({
    selector: 'page-inscr',
    templateUrl: 'inscr.html'
})
export class InscrPage implements OnInit {
    ngOnInit(): void {
        this.web.categoriesPersonnes.getAll().subscribe(d => this.categories = d);
    }

    valider: boolean = false;

    public categories: CategoriePersonne[] = [];

    public message: string = "";

    constructor(public  navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, public alertCtrl: AlertController) {
    }

    inscriptionForm(p: Personne) {
        this.valider = true;
        let inscriptions: Inscription[];
        if (this.navParams.data)
            inscriptions = this.navParams.data.inscriptions;

        const alert = this.alertCtrl.create({
            title: "Inscription réussie",
            buttons: [{
                text: 'OK',
                handler: () => {
                    this.navCtrl.goToRoot({})
                }
            }]
        });

        this.web.inscriptions.demandeInscription(p, inscriptions).subscribe((data) => {
                alert.present();
            }, (err) => {
                this.valider = false;
                if (err.error.erreur) this.message = err.error.erreur.message
            }
        );

    };
}
