import { Commessa } from "./commessa";
import { Dipendente } from "./dipendente";

export class DipendenteCommessaPK{

    codiceCommessa : string;

    dipendenteCodiceFiscale: string;

    constructor(codiceCommessa : string, dipendenteCodiceFiscale: string){

        this.codiceCommessa = codiceCommessa;

        this.dipendenteCodiceFiscale = dipendenteCodiceFiscale;
       
    }
    
    
}