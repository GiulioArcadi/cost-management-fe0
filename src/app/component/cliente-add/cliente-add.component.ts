import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  cliente: Cliente = new Cliente();


  constructor(private clienteService: ClienteService, private router: Router) {

  }

    ngOnInit(): void {
      console.log(new Date() + ": " + JSON.stringify("add cliente"));
    }

  onSubmit() {

    this.clienteService.addCliente(this.cliente).toPromise().then(x => this.goToList(), error => console.log(error));

  }

  goToList() {
    this.router.navigate(['/clienti']);
    return false;
  }
}
