import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contratto } from '../contratto';

@Injectable({
  providedIn: 'root'
})
export class ContrattoService {

  path = "http://localhost:8080/api";

  constructor(private http :HttpClient) { }

  public getDatiContratti(): Observable<any>
  {
    return this.http.get(this.path+"/daticontratti");
  }

  public insertContratto(contratto:Contratto): Observable<any>
  {
    return this.http.post<any>(this.path+"/insertcontratto",contratto);
  }
}
