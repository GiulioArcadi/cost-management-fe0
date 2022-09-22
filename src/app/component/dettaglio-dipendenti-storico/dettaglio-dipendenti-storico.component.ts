import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Commessa } from 'src/app/model/commessa';
import { Dipendente } from 'src/app/model/dipendente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { CommessaService } from 'src/app/services/commessa-service/commessa.service';
import { DipendenteService } from 'src/app/services/dipendente-service/dipendente.service';

@Component({
  selector: 'app-dettaglio-dipendenti-storico',
  templateUrl: './dettaglio-dipendenti-storico.component.html',
  styleUrls: ['./dettaglio-dipendenti-storico.component.css']
})
export class DettaglioDipendentiStoricoComponent implements OnInit {

  dipendenti: Observable<Dipendente[]>;
  clienti: Observable<Cliente[]>;
  dipendente: Dipendente[]=[];
  dipendentiRecuperati: Dipendente[]=[];
  dipendentiStorico: Dipendente[]=[];
  clienteSelezionato:any;
  dataSelezionata:Date; 
  codiceFiscaleSelezionato:any;
  codiceCommessaSelezionato:any; 
  clienteRecuperato: Cliente;
  commessaRecuperata: Commessa;
  tipologia: boolean=true;

  constructor(private dipendenteService: DipendenteService, private commessaService: CommessaService, private clienteService: ClienteService) {
    this.loadDipendenti();
    this.loadClienti();
  }

  ngOnInit(): void {
  }

  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendentiBean();
    this.dipendenti.subscribe(data =>{
      this.dipendente = data;
      for (let i = 0; i < this.dipendente.length; i++) {
        this.dipendenteService.findDipendentiStorico(this.dipendente[i]).subscribe(data=> {
          this.dipendentiRecuperati = data;
          for (let i = 0; i < this.dipendentiRecuperati.length; i++) {
            this.dipendentiStorico.push(this.dipendentiRecuperati[i]);
          }
          console.log(this.dipendentiStorico);
        },error => console.log(error));
      }
    })
  }

  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }

  changeCliente(val: any, codice: any){
    this.clienteSelezionato = val.target.value;
    this.codiceCommessaSelezionato = codice;
  }

  changeDataFine(val: any, codiceFiscale: any){
    this.dataSelezionata = val.target.value;
    this.codiceFiscaleSelezionato = codiceFiscale;

  }

}
