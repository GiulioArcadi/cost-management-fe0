import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-commessa-list',
  templateUrl: './commessa-list.component.html',
  styleUrls: ['./commessa-list.component.css']
})
export class CommessaListComponent implements OnInit {
  commesse: Observable<Commessa[]>;
  commessa: Commessa
  clienti: Observable<Cliente[]>
  filter:string
  radio:string
  partitaIva:string
  cliente:Cliente

  constructor(private commessaService: CommessaService, private clienteService: ClienteService, private router: Router) {
    this.reloadData();
    this.loadCommesse()
    this.loadClienti()
  }

  ngOnInit() {
    this.clienteService.findClienteByPartitaIva(this.partitaIva).subscribe(data => {
      console.log(data)
      this.cliente = data;
    }, error => console.log(error));

  }
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti()
  }
  async loadCommesse() {
    await new Promise(f => setTimeout(f, 50));
    this.commesse = this.commessaService.findAllCommesse()
  }
  onUpdate(codice: string) {
    this.router.navigate(['gestioneCommessa/commessaUpdate', codice]);
  }
  onDelete(codice: string) {
    this.commessaService.removeCommessa(codice).subscribe(
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
