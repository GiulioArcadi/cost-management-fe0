import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from './cliente';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClienteService {
  private clienteUrl = 'http://localhost:8080/api/clienti';
  constructor(private http: HttpClient) {
  }
  updateCliente(cliente: Cliente, partitaIva: string): Observable<Object> {
    return this.http.put(`${this.clienteUrl}/${partitaIva}`, cliente);
  }
  removeCliente(partitaIva: string): Observable<any> {
    return this.http.delete(`${this.clienteUrl}/${partitaIva}`, { responseType: 'text' });
  }
  findAllClienti(): Observable<any> {
    console.log("find allClienti CaLLED")
    return this.http.get(`${this.clienteUrl}`);
  }

  findClienteByPartitaIva(partitaIva: string): Observable<any> {
    console.log("find clientePiva CaLLED")
    return this.http.get(`${this.clienteUrl}/${partitaIva}`);
  }
  
  findClienteByCf(codFisc: string): Observable<any> {
    return this.http.get(`${this.clienteUrl}/cf/${codFisc}`);

  }
  findClienteByCi(codInter: string): Observable<any> {
    return this.http.get(`${this.clienteUrl}/ci/${codInter}`);
  }

  addCliente(cliente: Cliente): Observable<Object> {
    console.info(cliente)
    return this.http.post(`${this.clienteUrl}`, cliente);
  }

  findClienteFilter(filter:string,radio:string):  Observable<any>{
    console.info("called filter "+radio)
    switch ( radio ) {
       case "0":
          return this.http.get(`${this.clienteUrl}/rs/${filter}`);
       case "1":
          return this.http.get(`${this.clienteUrl}/sl/${filter}`);
       case "2":
          return this.http.get(`${this.clienteUrl}/pi/${filter}`);
       case "3":
          return this.http.get(`${this.clienteUrl}/cf/${filter}`);
       case "4":
          return this.http.get(`${this.clienteUrl}/ci/${filter}`);
       case "5":
          return this.http.get(`${this.clienteUrl}/pec/${filter}`);
       default:
          return this.http.get(`${this.clienteUrl}`);
        }
  }

}
