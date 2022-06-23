import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  partitaIva: string
  cliente: Cliente

  constructor(private route: ActivatedRoute, private router: Router,
    private clienteService: ClienteService) { }

    ngOnInit() {
      console.log("INSIDE INIT MetHOD -- UPDATECLIENTE COMPONENT")
      //this.cliente = new Cliente();
      this.partitaIva = this.route.snapshot.params['pIva'];
      this.clienteService.findClienteByPartitaIva(this.partitaIva)
        .subscribe(data => {
          console.log(data)
          this.cliente = data;
        }, error => console.log(error));
    }
    onSubmit() {
      this.clienteService.updateCliente(this.cliente, this.partitaIva).toPromise().then(x => this.goToList(), error => console.log(error));

    }
    goToList() {
      this.router.navigate(['/clienti']);
      return false;
    }
}
