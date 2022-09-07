import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Commessa } from 'src/app/model/commessa';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { CommessaService } from 'src/app/services/commessa-service/commessa.service';
import { DipendenteCommessa } from 'src/app/model/dipendenteCommessa';
import { DipendenteCommessaService } from 'src/app/services/dipendente-commessa-service/dipendente-commessa.service';
import { DipendenteService } from 'src/app/services/dipendente-service/dipendente.service';
import { Dipendente } from 'src/app/model/dipendente';

@Component({
  selector: 'app-commessa-list',
  templateUrl: './commessa-list.component.html',
  styleUrls: ['./commessa-list.component.css']
})
export class CommessaListComponent implements OnInit {
  commesse: Observable<Commessa[]>;
  clienti: Observable<Cliente[]>;
  filter:string;
  radio:string;
  partitaIva:string;
  cliente = new Cliente();
  listaCommesse: Commessa[];
  dipendenteRecuperato: any;
  listaDipendenti: string[]=[];


  constructor(private commessaService: CommessaService, private clienteService: ClienteService, private dipendenteService: DipendenteService,
  private dipendenteCommessaService: DipendenteCommessaService, private router: Router, private route: ActivatedRoute) {
    this.reloadData();
    this.loadCommesse();
    this.loadClienti();
  }

  ngOnInit() {
    this.clienteService.findClienteByPartitaIva(this.partitaIva).subscribe(data => {
      console.log(data)
      this.cliente = data;
    }, error => console.log(error));

    this.partitaIva = this.route.snapshot.params['pIva'];
      this.clienteService.findClienteByPartitaIva(this.partitaIva)
        .subscribe(data => {
          console.log(data)
          this.cliente = data;
        }, error => console.log(error));
    }
  
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }

  async loadCommesse() {
    /* trova tutte le commesse */
    await new Promise(f => setTimeout(f, 50));
    this.commesse = this.commessaService.findAllCommesse();
    this.commesse.subscribe(data => {
      this.listaCommesse = data;
      console.log(this.listaCommesse);

      /* recupera il nome del dipendente da ogni commessa */
      for (let i = 0; i < this.listaCommesse.length; i++) {
        this.commessaService.findDipendentiByCommessa(this.listaCommesse[i]).subscribe(data => {
          this.dipendenteRecuperato = data;
          
          /* inserisce il nome di ogni dipendente nella rispettiva commessa */
          this.listaDipendenti.push(this.dipendenteRecuperato);
          console.log(this.listaDipendenti);
          this.listaCommesse[i].nomeDipendente = this.dipendenteRecuperato;
          
        })
      }
    }, error => console.log(error));
  }

  giornateErogate(dataInizioAttivita) {
    let DataCorrente = new Date();
    dataInizioAttivita = new Date(dataInizioAttivita);

    return Math.floor((Date.UTC(DataCorrente.getFullYear(), DataCorrente.getMonth(),
    DataCorrente.getDate()) - Date.UTC(dataInizioAttivita.getFullYear(), dataInizioAttivita.getMonth(),
    dataInizioAttivita.getDate())) / (1000 * 60 * 60 * 24));
  }

  onUpdate(codice: string) {
    this.router.navigate(['gestioneCommessa/commessaUpdate', codice]);
  }
  onArchivia(commessa: Commessa, codice: string) {
    this.commessaService.archiviaCommessa(commessa, codice).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onSubmit(){
    this.commessaService.findCommessaFilter(this.filter,this.radio).toPromise().then(x => this.reloadData(), error => console.log(error));
  }
  reloadData() {
    this.commesse = this.commessaService.findCommessaFilter(this.filter,this.radio);
  }
}
