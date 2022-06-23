import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipologiaContratto } from '../tipologiacontratto/tipologia-contratto';

@Injectable({
  providedIn: 'root'
})
export class TipologiacontrattoService {

  constructor(private http: HttpClient) { }

  public addContratto(contratto:TipologiaContratto): Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/api/addTipologia",contratto);
  }

  public getAllTipologiaContratto(): Observable<any>
  {
    return this.http.get("http://localhost:8080/api/get_tipologie");
  }
}
