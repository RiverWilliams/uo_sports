import { Component } from '@angular/core';
import { Inscription } from "../../common/model";
import { Activite } from "../../common/model";
import { Creneau } from "../../common/model";
import { WebserviceProvider } from "../../common/webservice";

@Component({
  selector: 'page-listeinscription',
  templateUrl: 'listeInscription.html'
})

export class listeInscriptionPage {


  listeInscription: Inscription[];

  listeCreneau: Creneau[];

  constructor(private web: WebserviceProvider) {

  }

  ngOnInit(): void {
    //this.web.creneaux.getEnAttentes(1).subscribe(f => this.listeInscription = f);
    //this.web.creneaux.getAll().subscribe(d => d.forEach(e => console.log("id : ",e.id)));
    //this.web.creneaux.getAll().subscribe(d => d.forEach(e => this.web.creneaux.getEnAttentes(e.id).subscribe(f => console.log("test : ",f))));
    this.web.creneaux.getAll().subscribe(d => d.forEach(e => this.web.creneaux.getEnAttentes(e.id).subscribe(f => this.listeInscription = f)));
  }

  ListeInscriptionForm() {
    console.log(this.listeInscription.length);
    console.log(this.listeInscription);
  }
}
