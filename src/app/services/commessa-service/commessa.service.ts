import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Commessa } from 'src/app/model/commessa';

@Injectable({
  providedIn: 'root'
})
export class CommessaService {

  constructor(private http:HttpClient) { }

  private commesseUrl = 'http://localhost:8080/api/commessa-service/commesse';
  private commesseDipendentiUrl = 'http://localhost:8080/api/commessa-service/commesse-dipendenti';
  private commesseClientiUrl = 'http://localhost:8080/api/commessa-service/commesse-clienti';
  private commessaaArchiviaUrl = 'http://localhost:8080/api/commessa-service/commesse/archivia';
  private commesseAttualiUrl = 'http://localhost:8080/api/commessa-service/commesse-attuali';
  private commesseStoricoUrl = 'http://localhost:8080/api/commessa-service/commesse-storico';

  addCommessa(commessa:Commessa, clienteRagioneSociale: string) : Observable<any> {
    console.log("@@@@ "+commessa.codice);
    console.log("##### "+commessa.descrizioneCommessa);
    console.log("$$$$$$ " +commessa.dataInizioCommessa);
    console.log(" %%%%%%% " +commessa.dataFineCommessa);
    console.log("&&&&& "+ commessa.tipologiaCommessa);
    //console.log("****** PIVA "+ commessa.cliente.partitaIva);
    //console.log("(((((( "+ commessa.cliente.ragioneSociale);
    return this.http.post(`${this.commesseUrl}/${clienteRagioneSociale}`,commessa);
  }

  findAllCommesse():Observable<any>{
    return this.http.get(`${this.commesseUrl}`);
  }

  findCommessaByCodice(codice: string): Observable<any> {
    return this.http.get(`${this.commesseUrl}/${codice}`);

  }

  updateCommessa(commessa: Commessa, codice: string): Observable<Object> {
    return this.http.put(`${this.commesseUrl}/${codice}`, commessa);
  }

  archiviaCommessa(commessa: Commessa, codice: string): Observable<any> {
    return this.http.put(`${this.commessaaArchiviaUrl}/${codice}`, commessa);
  }

  findCommessaFilter(filter:string,radio:string):  Observable<any>{
    console.info("called filter "+radio)
    switch ( radio ) {
       case "0":
          return this.http.get(`${this.commesseUrl}/codice/${filter}`);
       case "1":
          return this.http.get(`${this.commesseUrl}/descrizione-commessa/${filter}`);
       case "2":
          return this.http.get(`${this.commesseUrl}/tipologia-contratto/${filter}`);
       default:
          return this.http.get(`${this.commesseUrl}`);
        }
  }

  findDipendentiByCommessa(commessa: Commessa): Observable<any>{
    return this.http.post(`${this.commesseDipendentiUrl}`, commessa);
  }

  findCommesseByCliente(cliente: Cliente): Observable<any>{
    return this.http.post(`${this.commesseClientiUrl}`, cliente);
  }

  findCommesseByClienteNominativo(cliente: Cliente, nominativo: string): Observable<any>{
    return this.http.post(`${this.commesseClientiUrl}/${nominativo}`, cliente);
  }

  findCommesseAttuali(commessa: Commessa):Observable<any>{
    return this.http.post(`${this.commesseAttualiUrl}`, commessa);
  }

  findCommesseStorico(commessa: Commessa):Observable<any>{
    return this.http.post(`${this.commesseStoricoUrl}`, commessa);
  }

}
