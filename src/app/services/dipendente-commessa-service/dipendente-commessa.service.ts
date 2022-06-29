import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DipendenteCommessa } from 'src/app/model/dipendenteCommessa';

@Injectable({
  providedIn: 'root'
})
export class DipendenteCommessaService {

  constructor(private http:HttpClient) { }

  //baseURL
  private dipendipendenteCommessaUrl = 'http://localhost:8080/api/dipendente-commessa-service/dipendenti-commesse';

  //async call to service in backend with Observable Object
  // addDipendenteCommessa(codiceFiscaleDipendente:string, commessaCodice: string, commessa:Commessa) : Observable<any> {
  //   return this.http.post(`${this.dipendipendenteCommessaUrl}/${codiceFiscaleDipendente}/${commessaCodice}`,commessa);
  // }

  addDipendenteCommessa(  dipendenteCommessa:DipendenteCommessa, commessaCodice: string) : Observable<any> {
    //console.log("####### DIPENDENTECOMMESSA importo parameter :"+ importo);
    //console.log(dipendenteCommessa);
    //console.log(dipendenteCommessa.id.dipendenteCodiceFiscale);
    
    // let httpHeaders = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Cache-Control': 'no-cache'
    //      });    

    //console.log("^^^^^ DIPENDENTECOMEMMSSA CCODICE :"+ dipendenteCommessa.id.codiceCommessa);
    //console.log("@@@@@ DIPENDENTE CF "+ dipendenteCommessa.id.dipendenteCodiceFiscale);
    //console.log(dipendenteCommessa.tariffaGg);
    //console.log(dipendenteCommessa);
    return this.http.post(`${this.dipendipendenteCommessaUrl}/${commessaCodice}`,
//     {"id":{
//       "dipendenteCodiceFiscale":"VNDGDU74B21L4856",
//       "commessaCodice":"romaF"
//       },
//   "tariffaGg": null,
//   "dataInizioAttivita": "2003-03-03",
//   "dataFineAttivita": "2019-02-02"
//  }
 
 dipendenteCommessa);
  }
}
