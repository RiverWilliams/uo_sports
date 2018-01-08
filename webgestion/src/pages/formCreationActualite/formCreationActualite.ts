import {Component, OnInit} from '@angular/core';
import {Sport} from "../../common/model";
import {WebserviceProvider} from "../../common/webservice";
import {Adaptateur} from "../../common/adaptateur";

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
      dateFin: Adaptateur.stringToDate(a.dateFin),
      dateDebut: Adaptateur.stringToDate(a.dateDebut),
      descCourte: a.descCourte,
      descLongue: a.descLongue,
      titre: a.titre,
      image: a.image,
      dateMiseEnLigne: new Date()
    }).subscribe(id => {
      if (Array.isArray(a.sports))
        a.sports.forEach(s => this.web.actualites.addSport(id, s).subscribe())
    });

  };

}
