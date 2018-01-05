import {Component} from '@angular/core';

import {NavParams, PopoverController} from 'ionic-angular';


@Component({
  template: `
    <ion-list radio-group [(ngModel)]="fontFamily" (ionChange)="changeFontFamily()" class="popover-page">
      <ion-row>
        <ion-col>
          <button (click)="changeFontSize('smaller')" ion-item detail-none class="text-button text-smaller">A</button>
        </ion-col>
        <ion-col>
          <button (click)="changeFontSize('larger')" ion-item detail-none class="text-button text-larger">A</button>
        </ion-col>
      </ion-row>
      <ion-row class="row-dots">
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('white')" class="dot-white"
                  [class.selected]="background == 'white'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('tan')" class="dot-tan"
                  [class.selected]="background == 'tan'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('grey')" class="dot-grey"
                  [class.selected]="background == 'grey'"></button>
        </ion-col>
        <ion-col>
          <button ion-button="dot" (click)="changeBackground('black')" class="dot-black"
                  [class.selected]="background == 'black'"></button>
        </ion-col>
      </ion-row>
      <ion-item class="text-athelas">
        <ion-label>Athelas</ion-label>
        <ion-radio value="Athelas"></ion-radio>
      </ion-item>
      <ion-item class="text-charter">
        <ion-label>Charter</ion-label>
        <ion-radio value="Charter"></ion-radio>
      </ion-item>
      <ion-item class="text-iowan">
        <ion-label>Iowan</ion-label>
        <ion-radio value="Iowan"></ion-radio>
      </ion-item>
      <ion-item class="text-palatino">
        <ion-label>Palatino</ion-label>
        <ion-radio value="Palatino"></ion-radio>
      </ion-item>
      <ion-item class="text-san-francisco">
        <ion-label>San Francisco</ion-label>
        <ion-radio value="San Francisco"></ion-radio>
      </ion-item>
      <ion-item class="text-seravek">
        <ion-label>Seravek</ion-label>
        <ion-radio value="Seravek"></ion-radio>
      </ion-item>
      <ion-item class="text-times-new-roman">
        <ion-label>Times New Roman</ion-label>
        <ion-radio value="Times New Roman"></ion-radio>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams) {

  }

  public mere: BasicPage;

  ngOnInit() {
    if (this.navParams.data) {
      this.mere = this.navParams.data.mere;
    }
  }

  changeFontFamily() {
    this.mere.text = this.fontFamily;
  }

}


@Component({
  templateUrl: 'template.html'
})
export class BasicPage {

  public text: string="Coucou";

  constructor(private popoverCtrl: PopoverController) {
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {mere: this});

    popover.present({
      ev: ev
    });
  }
}
