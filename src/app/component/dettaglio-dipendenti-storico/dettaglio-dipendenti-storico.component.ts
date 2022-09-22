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

  /* recupera tutti i dipendenti */
  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendentiBean();
    this.dipendenti.subscribe(data =>{
      this.dipendente = data;
      /* scorre i dipendenti, vengono inseriti in un metodo che restituisce una lista di dipendenti con data
      fine attività successiva a quella odierna */
      for (let i = 0; i < this.dipendente.length; i++) {
        this.dipendenteService.findDipendentiStorico(this.dipendente[i]).subscribe(data=> {
          this.dipendentiRecuperati = data;
          /* inserisce i dipendenti recuperati in un array */
          for (let i = 0; i < this.dipendentiRecuperati.length; i++) {
            this.dipendentiStorico.push(this.dipendentiRecuperati[i]);
          }
          console.log(this.dipendentiStorico);
        },error => console.log(error));
      }
    })
  }

  /* recupera tutti i clienti */
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }

}
