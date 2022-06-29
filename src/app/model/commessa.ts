import { Cliente } from "./cliente";

export class Commessa {

    codice:string;

    descrizioneCommessa:string;

    tipologiaCommessa: string;

    dataInizioCommessa: String;
    
    dataFineCommessa:String;

    cliente: Cliente;

    importo: number;

    
    
    constructor(){}

}