import { Dipendente } from "./dipendente";
import { TipologiaContratto } from 'src/app/model/tipologia-contratto/tipologia-contratto';

export class Contratto{

    id: number;
    active: number = 1;
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