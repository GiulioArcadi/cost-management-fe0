import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Commessa } from 'src/app/model/commessa';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { CommessaService } from 'src/app/services/commessa-service/commessa.service';

@Component({
  selector: 'app-commessa-update',
  templateUrl: './commessa-update.component.html',
  styleUrls: ['./commessa-update.component.css']
})
export class CommessaUpdateComponent implements OnInit {
  codice: string
  commessa: Commessa
  selectedCliente:string;
  tipologia_commessa: Array<string> = ["Time Material", "Produzione"];
  clienti:  Observable<Cliente[]>;
  selected = 'Time Material';
  constructor(private route: ActivatedRoute, private router: Router,
    private commessaService: CommessaService,private clienteService: ClienteService) { }

    ngOnInit() {
      this.commessa = new Commessa();
      this.codice = this.route.snapshot.params['codice'];
      this.commessaService.findCommessaByCodice(this.codice)
        .subscribe(data => {
          console.log(data)
          this.commessa = data;
        }, error => console.log(error));

        this.loadClienti()
    }
    onSubmit() {
      this.commessa.tipologiaCommessa = this.selected;
      this.commessaService.updateCommessa(this.commessa, this.codice).toPromise().then(x => this.goToList(), error => console.log(error));

    }
    goToList() {
      this.router.navigate(['gestioneCommessa/commessaList']);
      return false;
    }
    changeSelectedCliente(id:string){
      this.selectedCliente=id;
      console.info("partitaiva"+this.selectedCliente);
      this.clienteService.findClienteByPartitaIva(this.selectedCliente).toPromise().then(data => {
        this.commessa.cliente = data;
      }, error => console.log(error));
    }
    async loadClienti() {
      await new Promise(f => setTimeout(f, 50));
      this.clienti = this.clienteService.findAllClienti();
    }
}
