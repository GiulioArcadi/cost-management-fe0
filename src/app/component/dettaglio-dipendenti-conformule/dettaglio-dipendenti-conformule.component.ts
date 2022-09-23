import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Dipendente } from 'src/app/model/dipendente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { CommessaService } from 'src/app/services/commessa-service/commessa.service';
import { DipendenteService } from 'src/app/services/dipendente-service/dipendente.service';

@Component({
  selector: 'app-dettaglio-dipendenti-conformule',
  templateUrl: './dettaglio-dipendenti-conformule.component.html',
  styleUrls: ['./dettaglio-dipendenti-conformule.component.css']
})
export class DettaglioDipendentiConformuleComponent implements OnInit {

  dipendenti: Observable<Dipendente[]>;
  clienti: Observable<Cliente[]>;
  dipendente: Dipendente[]=[];
  dipendentiRecuperati: Dipendente[]=[];
  dipendentiAttuali: Dipendente[]=[];
  clienteSelezionato:any;
  dataSelezionata:Date; 
  codiceFiscaleSelezionato:any;
  codiceCommessaSelezionato:any; 
  clienteRecuperato: Cliente;


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
        this.dipendenteService.findDipendentiAttuali(this.dipendente[i]).subscribe(data=> {
          this.dipendentiRecuperati = data;
          /* inserisce i dipendenti recuperati in un array */
          for (let i = 0; i < this.dipendentiRecuperati.length; i++) {
            this.dipendentiAttuali.push(this.dipendentiRecuperati[i]);
          }
        },error => console.log(error));
      }
    })
  }

  /* recupera tutti i clienti */
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }

  /* recupera il cliente selezionato e il codice della commessa */
  changeCliente(val: any, codice: any){
    this.clienteSelezionato = val.target.value;
    this.codiceCommessaSelezionato = codice;
  }

  /* recupera la data selezionata e il codice fiscale del dipendente */
  changeDataFine(val: any, codiceFiscale: any){
    this.dataSelezionata = val.target.value;
    this.codiceFiscaleSelezionato = codiceFiscale;

  }

  Save() {
    /* aggiorna il cliente associato alla commessa con il cliente selezionato*/
    if (this.clienteSelezionato!= null){
      this.clienteService.findClienteByPartitaIva(this.clienteSelezionato).subscribe(data =>{
        this.clienteRecuperato = data;

        this.commessaService.updateCommessaCliente(this.clienteSelezionato, this.codiceCommessaSelezionato).subscribe(data =>{
          if (data!=null){
            alert("Dipendente aggiornato");
          }
        },error => console.log(error));

      },error => console.log(error));
    }

    /* aggiorna la data fine attività del dipendente con quella selezionata */
    if (this.dataSelezionata!=null){
      this.dipendenteService.updateDipendenteData(this.dataSelezionata, this.codiceFiscaleSelezionato).subscribe(data =>{
        if (data!=null){
          alert("Data fine attività aggiornata");
        }
      },error => console.log(error));
    }
    
  }

  onUpdate(){}
  onArchivia(){}
}
