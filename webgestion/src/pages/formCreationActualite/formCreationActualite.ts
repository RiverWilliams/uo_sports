import {Component, OnInit} from '@angular/core';
import {Actualite, Sport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";

@Component({
  selector: 'page-formcreationactualite',
  templateUrl: 'formCreationActualite.html'
})
export class formCreationActualitePage implements OnInit {
  ngOnInit(): void {
    this.web.sports.getAll().subscribe(d => this.sports = d);
  }

  sports: Sport[];

  constructor(private web: WebserviceProvider) {
  }

  creationActualiteForm(a) {
    this.web.actualites.post({
      dateFin: new Date(Date.parse(a.dateFin)),
      dateDebut: new Date(Date.parse(a.dateDebut)),
      descCourte: a.descCourte,
      descLongue: a.descLongue,
      titre: a.titre,
      image: a.image,
      dateMiseEnLigne: new Date()
    }).subscribe(id => a.sports.forEach(s => this.web.actualites.addSport(id, s).subscribe()));

  };

}
