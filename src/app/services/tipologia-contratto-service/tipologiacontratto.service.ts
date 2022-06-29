import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipologiaContratto } from 'src/app/model/tipologia-contratto/tipologia-contratto';

@Injectable({
  providedIn: 'root'
})
export class TipologiacontrattoService {

  constructor(private http: HttpClient) { }

  public addContratto(contratto:TipologiaContratto): Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/api/tipologia-contratto-service/tipologie-contratto",contratto);
  }

  public getAllTipologiaContratto(): Observable<any>
  {
    return this.http.get("http://localhost:8080/api/tipologia-contratto-service/tipologie-contratto");
  }
}
