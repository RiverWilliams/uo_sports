import {Component, Input, OnInit} from '@angular/core';
import {Creneau, Inscription} from "../../common/model";
import {PanierProvider} from "../../providers/panier/panier";

/**
 * Generated class for the PanierCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'panier-card',
    templateUrl: 'panier-card.html'
})
export class PanierCardComponent implements OnInit {

    ngOnInit(): void {
        this.creneau = <Creneau>this.inscription.creneau;
    }

    @Input() inscription: Inscription;
    creneau: Creneau;

    constructor(private panier: PanierProvider) {
    }

    supprimer(): void {
        this.panier.supprimer(this.creneau.id);
    }

}
