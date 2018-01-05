import {Component, Input} from '@angular/core';
import {Creneau} from "../../common/model";
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
export class PanierCardComponent {

    @Input() creneau: Creneau;

    constructor(private panier: PanierProvider) {
    }

    supprimer(): void {
        this.panier.supprimer(this.creneau.id);
    }

}
