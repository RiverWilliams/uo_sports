import { NgModule } from '@angular/core';
import { ActiviteCardComponent } from './activite-card/activite-card';
import { PanierCardComponent } from './panier-card/panier-card';
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
export class ComponentsModule {}
