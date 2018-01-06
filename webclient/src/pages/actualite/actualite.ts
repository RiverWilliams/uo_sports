import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {Actualite} from "../../common/model";
import {Filtre, FiltreGroup, FiltrePage} from "../filtre/filtre";
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";

@Component({
    selector: 'page-actu',
    templateUrl: 'actualite.html'
})
export class ActuPage implements OnInit {

    private filtreGroups: FiltreGroup[] = [{
        nom: 'Trier',
        filtres: [{
            nom: 'Debut', fonction: () => {
                this.comparateur = Comparateur.Actualite.debut
            }
        }, {
            nom: 'Fin', fonction: () => {
                this.comparateur = Comparateur.Actualite.fin
            }
        }, {
            nom: 'Mise en ligne', fonction: () => {
                this.comparateur = Comparateur.Actualite.debut
            }
        }]
    }];

    public monParam;

    private _actualites: Actualite[];

    get actualites(): Actualite[] {
        return this._actualites;
    }

    set actualites(value: Actualite[]) {
        this._actualites = value.sort(this.comparateur);
    }

    constructor(public  navCtrl: NavController, public navParams: NavParams, private web: WebserviceProvider, private popoverCtrl: PopoverController) {
        this.monParam = navParams.get("paramPasse");
        this._comparateur = (a, b) => Comparateur.Actualite.miseEnLigne(b, a);
    }


    private _comparateur: any;

    get comparateur(): any {
        return this._comparateur;
    }

    set comparateur(value: any) {
        if (this.comparateur == value)
            this._comparateur = (a, b) => value(b, a);
        else
            this._comparateur = value;
        this.actualites.sort(this.comparateur);
    }

    ngOnInit(): void {
        this.web.actualites.getAll().subscribe(data => this.actualites = data);
        let filtres: Filtre[] = [];
        filtres.push({
            nom: 'Tous',
            fonction: () => this.web.actualites.getAll().subscribe(data => this.actualites = data)
        })
        ;
        this.web.categoriesSports.getAll().subscribe(data => data.map(v => filtres.push({
            nom: v.nom,
            fonction: () => this.web.categoriesSports.getActualites(v.id).subscribe(d => this.actualites = d)
        })));
        this.web.sports.getAll().subscribe(data => data.map(v => filtres.push({
            nom: v.nom,
            fonction: () => this.web.sports.getActualites(v.id).subscribe(d => this.actualites = d)
        })));
        this.filtreGroups.push({nom: 'Filtrer', filtres: filtres.sort((a, b) => a.nom.localeCompare(b.nom))});
    }

    openFiltre(ev) {
        const popover = this.popoverCtrl.create(FiltrePage, {filtres: this.filtreGroups});
        popover.present({ev: ev});
    }

}
