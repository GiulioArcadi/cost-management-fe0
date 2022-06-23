import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {
  constructor(private http:HttpClient ) { }

  private aziendeUrl = 'http://localhost:8080/api/aziende';

  findAziendaById (id : string): Observable<any> {
    //console.log("INSIDE FIND AZIENDA BY ID");

    return this.http.get(`${this.aziendeUrl}/${id}`);
  }

  findAziendaByName():Observable<any>{
    //console.log("INSIDE FIND AZIENDA BY NOME");
    return  this.http.get(`${this.aziendeUrl}/nome`);
      
  }

  findAllAziende(): Observable<any>{
    return this.http.get(`${this.aziendeUrl}`);
  }
  
}
