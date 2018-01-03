import {Activite} from "../../model/Activite";
import { Injectable } from '@angular/core';

/*
  Generated class for the ActivitesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivitesProvider {
  
  activites: Activite[] = [];

  constructor() {
  }

  getActivites(){
    return this.activites.values();
  }
  
}

