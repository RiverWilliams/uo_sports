import {Activite} from "./Activite";
import {Niveau} from "./Niveau";
import {Responsable} from "./Responsable";
import {Lieu} from "./Lieu";

export interface Creneau {
  id?: number;
  jour?: number;
  heureDebut?: string;
  heureFin?: string;
  effectif?: number;

  lieu?: Lieu;
  responsable?: Responsable;
  niveau?: Niveau;
  activite?: Activite;

}
