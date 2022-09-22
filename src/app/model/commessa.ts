import { Cliente } from "./cliente";
import { Dipendente } from "./dipendente";
import { DipendenteCommessa } from "./dipendenteCommessa";

export class Commessa {

    codice:string;

    descrizioneCommessa:string;

    tipologiaCommessa: string;

    dataInizioCommessa: Date;
    
    dataFineCommessa: Date;

    cliente: Cliente;

    importo: number;

    active: number=1;

    dipendenteCommesse: DipendenteCommessa;

    nomeDipendente: String;

    dipendenti: Array<Dipendente>;
    
    constructor(){}

}