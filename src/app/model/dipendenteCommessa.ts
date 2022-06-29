import { Commessa } from "./commessa";
import { Dipendente } from "./dipendente";
import { DipendenteCommessaPK } from "./dipendenteCommessaPK";

export class DipendenteCommessa {

  id: DipendenteCommessaPK;

  dataInizioAttivita: Date;

  dataFineAttivita: Date;

  tariffaGg: string;

  //importo: string;

  constructor() {
    this.id = new DipendenteCommessaPK("","");
    //this.importo = "0";
  }

}