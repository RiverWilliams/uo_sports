import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltrePage } from './filtre';

@NgModule({
  declarations: [
    FiltrePage,
  ],
  imports: [
    IonicPageModule.forChild(FiltrePage),
  ],
})
export class FiltrePageModule {}
