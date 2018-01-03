import {Component, Input} from '@angular/core';
import {Creneau} from "../../model/Creneau";
import {PanierProvider} from "../../providers/panier/panier";

/**
 * Generated class for the ActiviteCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'activite-card',
  templateUrl: 'activite-card.html'
})
export class ActiviteCardComponent {

  @Input() creneau: Creneau;

  constructor(private panier: PanierProvider) {
  }

  ajoutable(): boolean {
    return !this.panier.contient(this.creneau.id);
  }

  ajouter(): void {
    this.panier.ajouter(this.creneau);
  }

}
