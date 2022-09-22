import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Dipendente } from 'src/app/model/dipendente';


export interface GetResponseDipendenti {
  
  content: Dipendente[],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true
    },
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: true,
    unpaged: false,
  },
  last: false,
  totalPages: number,
  totalElements: number,
  numberOfElements: number,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true
  },
  size: number,
  number: number,
  first: false,
  empty: false
};


@Injectable({
  providedIn: 'root'
})
export class DipendenteService {

  constructor(private http: HttpClient) { }
  
  private dipendentiUrl = 'http://localhost:8080/api/dipendente-service/dipendenti';
  private dipendentiUrlPaginated = 'http://localhost:8080/api/dipendente-service/dipendenti-paginated';
  private aziendeUrl = 'http://localhost:8080/api/dipendente-service/dipendenti';
  private dipendentiBeanUrl = 'http://localhost:8080/api/dipendente-service/dipendenti/dipendente';
  private dipendentiDataUrl = 'http://localhost:8080/api/dipendente-service/dipendenti/data';
  private dipendentiAttualiUrl = 'http://localhost:8080/api/dipendente-service/dipendenti/attuali';
  private dipendentiStoricoUrl = 'http://localhost:8080/api/dipendente-service/dipendenti/storico';

  //async call to service in backend with Observable Object
  addDipendente(dipendente: Dipendente, id: number): Observable<any> {
    console.log("domicilio dipendente");
    console.log(dipendente.domicilio);
    //console.log(dipendente.emAziendale);
    return this.http.post(`${this.dipendentiUrl}/${id}`, dipendente);
  }

/*
  findAllDipendenti(size: number, page: number): Observable<GetResponseDipendenti> {
    console.log("%%%%%% SERVICE FIND ALL DIPENDENTI CALLED" + page + " " + size);
    let params = new HttpParams();
    params.append('page', String(10));
    params.append('size',String(1));
    console.log("????" + page + " " + size);
    console.log(this.http.get<GetResponseDipendenti>(`${this.dipendentiUrlPaginated}?page=${page}&size=${size}`));
    return this.http.get<GetResponseDipendenti>(`${this.dipendentiUrlPaginated}?page=${page}&size=${size}`);
     .pipe(      
       map((userData: any, GetResponseDipendenti)=>userData),
       catchError(err=> throwError(err))
    );
  }*/

//   findAllDipendenti(): Observable<any>{
//     console.log("%%%%%% SERVICE FIND ALL DIPENDENTI CALLED");

//     return this.http.get(`${this.dipendentiUrl`);
//   }
// }

  // findAllDipendenti(): Observable<any>{
  //   console.log("%%%%%% SERVICE FIND ALL DIPENDENTI CALLED");

  //   return this.http.get(`${this.dipendentiUrl`);
  // }
  findAllDipendenti():Observable<any>{
    console.log("find all dipendenti CaLLED")
  return this.http.get(`${this.dipendentiUrl}`);
    // .pipe(map(response=> {
    //    if(response){
    //      console.log(response);
    //       return Object.values(response); //This will return the array of object values.
    //     }
    //     console.log(response);  
    //     return []; // If response is null return empty array for safety.
    // }));
  }


  updateDipendente(dipendente: Dipendente, id: string, aziendaId: number): Observable<Object> {

    console.log("INSIDE UPDATE DIPENDENTE METHOD SERVICE")
    return this.http.put(`${this.dipendentiUrl}/${id}/${aziendaId}`, dipendente);
  }

  archiviaDipendente(dipendente: Dipendente, codiceFiscale: string): Observable<any> {

    return this.http.put(`${this.dipendentiUrl}/${codiceFiscale}`, dipendente);

  }

  findDipendenteById(id: string): Observable<any> {
    return this.http.get(`${this.dipendentiUrl}/${id}`);

  }

  findAziendaById(id: string): Observable<any> {
    return this.http.get(`${this.aziendeUrl}/${id}`);
  }

  findAllDipendentiBean():Observable<any>{
  return this.http.get(`${this.dipendentiBeanUrl}`);
  }

  updateDipendenteData(data: Date, codiceFiscale: string): Observable<Object> {

    return this.http.put(`${this.dipendentiDataUrl}/${data}/${codiceFiscale}`, null);
  }

  findDipendentiAttuali(dipendente: Dipendente): Observable<any> {
    return this.http.post(`${this.dipendentiAttualiUrl}`, dipendente);
  }

  findDipendentiStorico(dipendente: Dipendente): Observable<any> {
    return this.http.post(`${this.dipendentiStoricoUrl}`, dipendente);
  }

}
