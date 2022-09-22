import { Azienda } from "./azienda";
import { Commessa } from "./commessa";
import { Contratto } from "./contratto";
import { DipendenteCommessa } from "./dipendenteCommessa";

export class Dipendente{
	
	
	codiceFiscale : string;

	cellulare : string;

	cognome : string;

	dataNascita: string;

	age: number;

	domicilio : string;


	email: string;

	emAziendale: string;

	luogoNascita: string;

	nome: string;

	residenza: string;

	azienda : Azienda;

	active: number=1;

	dipendenteCommesse: DipendenteCommessa;

	contratti: Contratto;

	commessa: Commessa;

	constructor(){
		
	}
}