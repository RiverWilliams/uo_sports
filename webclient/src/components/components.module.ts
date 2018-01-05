import { NgModule } from '@angular/core';
import { ActiviteCardComponent } from './activite-card/activite-card';
import { PanierCardComponent } from './panier-card/panier-card';
import { ActuCardComponent } from './actualite-card/actualite-card';
@NgModule({
	declarations: [ActiviteCardComponent],
	imports: [],
	exports: [ActiviteCardComponent]
})
@NgModule({
    declarations: [PanierCardComponent],
    imports: [],
    exports: [PanierCardComponent]
})
@NgModule({
    declarations: [ActuCardComponent],
    imports: [],
    exports: [ActuCardComponent]
})
export class ComponentsModule {}
