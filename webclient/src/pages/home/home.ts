import {Component, OnInit} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SeancePage} from '../seance/seance';
import {PanierPage} from '../panier/panier';
import {Activite} from '../../common/model'
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {PopoverController} from 'ionic-angular';
import {Filtre, FiltreGroup, FiltrePage} from "../filtre/filtre";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    get activites(): Activite[] {
        return this._activites;
    }

    set activites(value: Activite[]) {
        this._activites = value.sort(this.comparateur);
    }

    private _activites: Activite[]=[];

    private _comparateur: any;

    get comparateur(): any {
        return this._comparateur;
    }

    set comparateur(value: any) {
        if (this.comparateur == value)
            this._comparateur = (a, b) => value(b, a);
        else
            this._comparateur = value;
        this.activites.sort(this.comparateur);
    }

    private filtreGroups: FiltreGroup[] = [{
        nom: 'Trier',
        filtres: [{
            nom: 'A-Z', fonction: () => {
                this.comparateur = Comparateur.Activite.nom
            }
        }]
    }];
    public pagePanier: any;

    constructor(private web: WebserviceProvider, public navCtrl: NavController, public menu: MenuController, public popoverCtrl: PopoverController) {
        this.pagePanier = PanierPage;
        this._comparateur = Comparateur.Activite.nom
    }

    ngOnInit(): void {
        this.web.activites.getAll().subscribe(data => this.activites = data);
        let filtres: Filtre[] = [];
        filtres.push({
            nom: 'Tous',
            fonction: () => this.web.activites.getAll().subscribe(data => this.activites = data)

        });
        this.web.categoriesSports.getAll().subscribe(data => data.map(v => filtres.push({
            nom: v.nom,
            fonction: () => this.web.categoriesSports.getActivites(v.id).subscribe(d => this.activites = d)
        })));
        this.web.sports.getAll().subscribe(data => data.map(v => filtres.push({
            nom: v.nom,
            fonction: () => this.web.sports.getActivites(v.id).subscribe(d => this.activites = d)
        })));
        this.filtreGroups.push({nom: 'Filtrer', filtres: filtres.sort((a, b) => a.nom.localeCompare(b.nom))});
    }

    naviguer(p: Activite): void {
        this.navCtrl.push(SeancePage, {
            paramPasse: p
        })
    }

    openFiltre(ev) {
        const popover = this.popoverCtrl.create(FiltrePage, {filtres: this.filtreGroups});
        popover.present({ev: ev});
    }
}
