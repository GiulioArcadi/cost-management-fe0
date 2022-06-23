import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Azienda } from '../azienda';
import { Dipendente } from '../dipendente';
import { DipendenteService, GetResponseDipendenti } from '../dipendente.service';
import { GestioneCommessaComponent } from '../gestione-commessa/gestione-commessa.component';

@Component({
  selector: 'app-dipendente-list',
  templateUrl: './dipendente-list.component.html',
  styleUrls: ['./dipendente-list.component.css']
})
export class DipendenteListComponent implements OnInit {
  dipendenti: Observable<Dipendente[]>;
  dipendente: Dipendente;
  aziendaId : string;
  
  //papgintion elements
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  //email checkbox
  saveEmail:boolean = false;
 

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
getEmail(){

}

// loadDipendentiPaginated() {
//   console.log("CALLED LOAD DIPENDENTI");
//   this.dipendenteService.findAllDipendenti().subscribe(data=>this.dipendente=data);
// }


}

