import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { verificationResponsablePage } from '../verificationResponsable/verificationResponsable';

@Component({
	selector: 'page-selectverificationresponsable',
	templateUrl: 'selectVerificationResponsable.html'
})
export class selectVerificationResponsablePage {
	constructor(public navCtrl: NavController) {

	}
	
	VerifResponsableForm() {
		this.navCtrl.push(verificationResponsablePage,);
	}

}
