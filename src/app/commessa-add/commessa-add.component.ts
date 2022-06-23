import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';

@Component({
  selector: 'app-commessa-add',
  templateUrl: './commessa-add.component.html',
  styleUrls: ['./commessa-add.component.css']
})
export class CommessaAddComponent implements OnInit {

  commessa : Commessa = new Commessa();
  cliente : Cliente = new Cliente();
  defaultClienteId: string;
  selectedClienteId: string;
  clienti: Observable<Cliente[]>;
  clienteSelectedPartitaIva : string;

  selectedCommessa = 'Time Material';
  //tipologia_commessa: Array<string> = ["Time Material", "Produzione"];

  
  constructor(private commessaService: CommessaService,private clienteService: ClienteService,
     private router: Router) {
      
      }

  ngOnInit(): void {
    this.loadClienti();
    /*
    this.clienteService.findClienteByPartitaIva()
      .subscribe(data => {
        //console.log(data)
        this.clienteByPartitaIva = data;
        this.defaultClienteId = data.id;
        this.selectedClienteId = data.id;
      }, error => console.log(error));
      */
  }

  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
  }

  changeClient(id: string) {
    this.selectedClienteId=id;
      console.info("partitaiva"+this.selectedClienteId);
      this.clienteService.findClienteByPartitaIva(this.selectedClienteId).toPromise().then(data => {
        this.commessa.cliente = data;
      }, error => console.log(error));
  }


  onSubmit() {
    this.commessa.tipologiaCommessa = this.selectedCommessa;
    
    this.commessaService.
      addCommessa(this.commessa, this.clienteSelectedPartitaIva).toPromise()
      .then(x => this.goToList(), error => console.log(error));
  }

  //TODO
  goToList(){
    //this.router.navigate(['listaCommesse']);
  }

}
