import { Dipendente } from "./dipendente";
import { TipologiaContratto } from "./tipologiacontratto/tipologia-contratto";

export class Contratto{

    costoGg:number;
    dataFineContratto:Date;
    dataInizioContratto:Date;
    livello:number;
    note:string;
    retribuzioneLorda:number;
    rimborsoSpeseMensili:number;
    dipendente:Dipendente;
    tipologiaContrattoBean:TipologiaContratto;

    constructor(){}
  
  }