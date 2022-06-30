import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
    selector: 'app-cliente-list',
    templateUrl: 'cliente-list.component.html',
    styleUrls: ['cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  clienti: Observable<Cliente[]>;
  filter:string
  radio:string
  constructor(private clienteService: ClienteService, private router: Router) {
    this.reloadData();
  }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.clienti = this.clienteService.findClienteFilter(this.filter,this.radio);
  }
  onUpdate(partitaIva: string) {
    this.router.navigate(['clienti/', partitaIva]);
  }
  onAdd() {
    this.router.navigate(['clienti/add']);
  }
  onArchivia(cliente: Cliente, partitaIva: string) {
    this.clienteService.archiviaCliente(cliente, partitaIva).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  onSubmit(){
    this.clienteService.findClienteFilter(this.filter,this.radio).toPromise().then(x => this.reloadData(), error => console.log(error));
  }
}
