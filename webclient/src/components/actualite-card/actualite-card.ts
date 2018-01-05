import {Component, Input} from '@angular/core';
import {Actualite} from "../../common/model";


/**
 * Generated class for the ActiviteCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'actalite-card',
    templateUrl: 'actualite-card.html'
})
export class ActuCardComponent {

    @Input() actualite: Actualite;

    constructor() {
    }



}
