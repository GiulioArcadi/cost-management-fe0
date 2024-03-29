import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { Commessa } from 'src/app/model/commessa';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';
import { CommessaService } from 'src/app/services/commessa-service/commessa.service';

@Component({
  selector: 'app-commessa-ricerca',
  templateUrl: './commessa-ricerca.component.html',
  styleUrls: ['./commessa-ricerca.component.css']
})
export class CommessaRicercaComponent implements OnInit {

  clienti = new Observable<Cliente[]>();
  listaClienti : Cliente[];
  commessaAttuali : boolean = false;
  commessaStorico : boolean = false;
  nominativo : string;
  nominativo1 : string;
  clienteSelezionato: string;
  cliente : Cliente;
  commesseRecuperate: Commessa[]=[];
  commesseVerificate: Commessa[]=[];
  nom : string;

  @ViewChild('nominativo') input;

  constructor(private clienteService: ClienteService, private commessaService: CommessaService, private router: Router, route: ActivatedRoute) {

    route.paramMap.subscribe((params: ParamMap)=>{
      this.nom = params.get('nominativo');
    })
   }


  ngOnInit(): void {
    this.loadClienti();
  }

  /* recupera tutti i clienti */
  async loadClienti() {
    await new Promise(f => setTimeout(f, 50));
    this.clienti = this.clienteService.findAllClienti();
    this.clienti.subscribe(data => {
      this.listaClienti = data;
    }, error => console.log(error));
  }

  changeCliente(id: string){
    this.clienteSelezionato = id;
    this.clienteService.findClienteByPartitaIva(this.clienteSelezionato).toPromise().then(data => {
      this.cliente = data;
    },error => console.log(error));
  }

  onSubmit() {
  }

  mostraCommesseAttuali(){
    /* recupera le commesse tramite il cliente selezionato e il nominativo inserito */
    if (this.nominativo!=null && this.cliente!=null) {
      this.commessaService.findCommesseByClienteNominativo(this.cliente, this.nominativo1).subscribe(data => {
        this.commesseRecuperate = data;
        if (this.commesseRecuperate.length==0){
          this.commessaAttuali=false;
          this.commessaStorico=false;
        } else {
          this.commessaAttuali=true;
          this.commessaStorico=false;
        }
        /* recupera le commesse con data fine attività null o successive alla data corrente*/
        for (let i = 0; i < this.commesseRecuperate.length; i++) {
          this.commessaService.findCommesseAttuali(this.commesseRecuperate[i]).subscribe(data => {
            this.commesseVerificate = data;
          }, error => console.log(error))
        }
      },error => console.log(error));
      /* recupera le commesse tramite il cliente selezionato */
    } else {
      if (this.cliente != null && this.nominativo==null) {
        this.commessaService.findCommesseByCliente(this.cliente).subscribe(data => {
          this.commesseRecuperate = data;
          if (this.commesseRecuperate.length==0){
            this.commessaAttuali=false;
            this.commessaStorico=false;
          } else {
            this.commessaAttuali=true;
            this.commessaStorico=false;
          }
          /* recupera le commesse con data fine attività null o successive alla data corrente*/
          for (let i = 0; i < this.commesseRecuperate.length; i++) {
            this.commessaService.findCommesseAttuali(this.commesseRecuperate[i]).subscribe(data => {
              this.commesseVerificate = data;
            }, error => console.log(error))
          }
        }, error => console.log(error));
      }
    }
  }

  mostraCommesseStorico(){
    /* recupera le commesse tramite il cliente selezionato e il nominativo inserito */
    if (this.nominativo!=null && this.cliente!=null) {
      this.commessaService.findCommesseByClienteNominativo(this.cliente, this.nominativo1).subscribe(data => {
        this.commesseRecuperate = data;
        if (this.commesseRecuperate.length==0){
          this.commessaStorico=false;
          this.commessaAttuali=false;
        } else {
          this.commessaStorico=true;
          this.commessaAttuali=false;
        }
        /* recupera le commesse con data fine attività precedenti alla data corrente*/
        for (let i = 0; i < this.commesseRecuperate.length; i++) {
          this.commessaService.findCommesseStorico(this.commesseRecuperate[i]).subscribe(data => {
            this.commesseVerificate = data;
          }, error => console.log(error))
        }
      },error => console.log(error));
      /* recupera le commesse tramite il cliente selezionato */
    }else{
      if (this.cliente!=null){
        this.commessaService.findCommesseByCliente(this.cliente).subscribe(data => {
          this.commesseRecuperate = data;
          if (this.commesseRecuperate.length==0){
            this.commessaStorico=false;
            this.commessaAttuali=false;
          } else {
            this.commessaStorico=true;
            this.commessaAttuali=false;
          }
          /* recupera le commesse con data fine attività precedenti alla data corrente*/
          for (let i = 0; i < this.commesseRecuperate.length; i++) {
            this.commessaService.findCommesseStorico(this.commesseRecuperate[i]).subscribe(data => {
              this.commesseVerificate = data;
            }, error => console.log(error))
          }
        }, error => console.log(error));
      }
    }
  }

  onKeyUp(){
    this.nominativo = this.input.nativeElement.value;
    this.nominativo1 = this.nominativo;
  }

}
