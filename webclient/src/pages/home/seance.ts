import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Activite, Creneau, Lieu, Niveau, Responsable} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";

@Component({
    selector: 'page-seance',
    templateUrl: 'seance.html'
})
export class SeancePage implements OnInit {
    ngOnInit(): void {
        this.webservice.creneaux.getAll().subscribe(data => this.creneaux = data);
    }

    public monParam;


    creneaux: Creneau[];

    /*
    [{
    id: 0,
    jour: 1,
    heureDebut: new Date(),
    heureFin: new Date(),
    effectif: 20,
    activite: this.activites[0],
    lieu: this.lieux[0],
    niveau: this.niveaux[0],
    responsable: this.responsables[0]
}]

/*
        , {
            id: 1
            ,
            jour: 2
            ,
            heureDebut: "12:20"
            ,
            heureFin: "13:00"
            ,
            effectif: 20
            ,
            activite: {
                nom: "Athl�tisme"
            }
            ,
            lieu: {
                nom: "Stade de La Source"
            }
            ,
            niveau: {
                niveau: "Tous"
            }
            ,
            responsable: {
                nom: "QUEVAL"
            }
        }

        ,
        {
            id: 2,
            jour:
                3,
            heureDebut:
                "12:20",
            heureFin:
                "13:00",
            effectif:
                20,
            activite:
                {
                    nom: "Athl�tisme"
                }
            ,
            lieu: {
                nom: "Stade de La Source"
            }
            ,
            niveau: {
                niveau: "Tous"
            }
            ,
            responsable: {
                nom: "QUEVAL"
            }
        }
        ,
        {
            id: 3,
            jour:
                4,
            heureDebut:
                "12:20",
            heureFin:
                "13:30",
            effectif:
                20,
            activite:
                {
                    nom: "Athl�tisme"
                }
            ,
            lieu: {
                nom: "Stade de La Source"
            }
            ,
            niveau: {
                niveau: "Tous"
            }
            ,
            responsable: {
                nom: "QUEVAL"
            }
        }
    ]
    ;
*/

    constructor(public  navCtrl: NavController, public navParams: NavParams, private webservice: WebserviceProvider) {

        this.monParam = navParams.get("paramPasse");
        ;
    }

}
