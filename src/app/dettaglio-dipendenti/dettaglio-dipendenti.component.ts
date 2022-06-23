import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Azienda } from '../azienda';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-dettaglio-dipendenti',
  templateUrl: './dettaglio-dipendenti.component.html',
  styleUrls: ['./dettaglio-dipendenti.component.css']
})
export class DettaglioDipendentiComponent implements OnInit {

  dipendenti: Observable<Dipendente[]>;
  dipendente: Dipendente;
  aziendaId : string;

  //papgintion elements
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private dipendenteService: DipendenteService, private router: Router) {
    this.loadDipendenti();
    //this.aziendaId = azienda.id;
  }

  ngOnInit(): void {

  }

  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendenti();
  }

  onUpdate(codiceFiscale: string, aziendaId: number,azienda: Azienda) {
    this.router.navigate(['updateDipendente', codiceFiscale, aziendaId]);
  }

  onArchivia(codiceFiscale: string) {
  
    this.dipendenteService.removeDipendente(codiceFiscale).subscribe(
      data => {
        console.log(data);
        this.loadDipendenti();
      },
      error => console.log(error));
  }

  //implementation witout mta-talbe pagination
updatePageSize(event: any):void {
  this.thePageNumber = 1;
  this.thePageSize= event.target.value;
  this.loadDipendenti();
}

//implementation with mat-table pagination
onPaginateChange(event: PageEvent){
  this.thePageNumber = event.pageIndex +1;
  this.thePageSize = event.pageSize;
 this.loadDipendenti();

}
}
