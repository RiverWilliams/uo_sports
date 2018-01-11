import { Component } from '@angular/core';
import { Activite } from "../../common/model";
import { Personne } from "../../common/model";
import { Inscription } from "../../common/model";
import { WebserviceProvider } from "../../common/webservice";

@Component({
  selector: 'page-listeinscription',
  templateUrl: 'listeInscription.html'
})

export class listeInscriptionPage {

  listeActivite: Activite[];
  listePersonne: Personne[];
  listeInscription: Inscription[];

  constructor(private web: WebserviceProvider) {

  }

  ngOnInit(): void {
    //this.web.activites.getAll().subscribe(d => this.listeActivite = d);
    //this.web.inscriptions.getAll().subscribe(d => this.listeInscription = d);

  }

  ListeInscriptionForm() {
        //console.log(this.listeInscription.length);
  }

}