import {Component, OnInit} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SeancePage} from '../seance/seance';
import {PanierPage} from '../panier/panier';
import {Activite} from '../../common/model'
import {WebserviceProvider} from "../../common/webservice";
import {Comparateur} from "../../common/comparateur";
import {PopoverController} from 'ionic-angular';
import {Filtre, FiltrePage} from "../filtre/filtre";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    activites: Activite[];

    private filtres: Filtre[] = [{nom: 'Trier'}, {
        nom: 'A-Z', fonction: () => {
            this.activites.sort(Comparateur.Activite.nom)
        }
    }, {
        nom: "Z-A", fonction: () => {
            this.activites.sort((a, b) => Comparateur.Activite.nom(b, a))
        }
    }
    ];

    ngOnInit(): void {
        this.web.activites.getAll().subscribe(data => this.activites = data.sort(Comparateur.Activite.nom));
    }

    public page2: any;

    constructor(public navCtrl: NavController, public menu: MenuController, private web: WebserviceProvider, public popoverCtrl: PopoverController) {
        this.page2 = PanierPage;
        menu.enable(true);

        this.filtres.push({nom: 'Filtrer'});
        this.filtres.push({
            nom: 'Tous',
            fonction: () => this.web.activites.getAll().subscribe(data => this.activites = data.sort(Comparateur.Activite.nom))
        });
        this.web.categoriesSports.getAll().subscribe(data => data.sort(Comparateur.CategorieSport.nom).map(v => this.filtres.push({
            nom: v.nom,
            fonction: () => this.web.categoriesSports.getActivites(v.id).subscribe(d => this.activites = d)
        })));
        this.web.sports.getAll().subscribe(data => data.sort(Comparateur.Sport.nom).map(v => this.filtres.push({
            nom: v.nom,
            fonction: () => this.web.sports.getActivites(v.id).subscribe(d => this.activites = d)
        })));


    }

    naviguer(p: Activite): void {
        this.navCtrl.push(SeancePage, {
            paramPasse: p
        })
    }

    ouvreMenu(evt) {
        if (evt === "filtre") {
            this.menu.enable(true, 'menu1');
            this.menu.enable(false, 'menu2');
        } else {
            this.menu.enable(true, 'menu2');
            this.menu.enable(false, 'menu1');
        }
        this.menu.toggle();
    }

    openFiltre(ev) {
        const popover = this.popoverCtrl.create(FiltrePage, {filtres: this.filtres});
        popover.present({ev: ev});
    }


}
