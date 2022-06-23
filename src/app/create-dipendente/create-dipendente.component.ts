import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Azienda } from '../azienda';
import { AziendaService } from '../azienda.service';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';
declare let alertify: any;

@Component({
  selector: 'app-create-dipendente',
  templateUrl: './create-dipendente.component.html',
  styleUrls: ['./create-dipendente.component.css']
})

export class CreateDipendenteComponent implements OnInit {

  dipendente: Dipendente = new Dipendente();
  selectedeAziendaId: number = 1;
  emailAziendale:string;
  defaultAziendaId: number;
  aziende: Observable<Azienda[]>;
  aziendaFromProperties: Observable<Azienda>;
  aziendaById: Azienda;
  aziendaByNome: Azienda;

  //check future date 
  futureDateError: boolean;


  constructor(private aziendaService: AziendaService, private dipendentiService: DipendenteService, private router: Router) {
    this.loadAziende();
  }

  async loadAziende() {
    await new Promise(f => setTimeout(f, 50));
    this.aziende = this.aziendaService.findAllAziende();
  }

  ngOnInit(): void {
    /* 
    this.aziendaService.findAziendaById("1")
      .subscribe(data => {
        //console.log(data)
        this.aziendaById = data;
      }, error => console.log(error));
    */
    this.aziendaService.findAziendaByName()
      .subscribe(data => {
        //console.log(data)
        this.aziendaByNome = data;
        this.defaultAziendaId = data.id;
        this.selectedeAziendaId = data.id;
      }, error => console.log(error));

  }

  changeClient(value: any) {
    this.selectedeAziendaId = value;
  }

  onSubmit() {
    console.log("%%%$$ DIPENDENT OBJ :" + this.dipendente.cellulare);
    
    this.dipendentiService.
      addDipendente(this.dipendente, this.selectedeAziendaId).toPromise()
      .then(res => {
          if (res == null) {
            alertify.error("Il dipendente e' gia' esistente nel database!" +
              " Inserisci un codice fiscale che non e' presente.");
          } else {
            this.goToList();
          }
        });
  }
  
  goToList() {
    this.router.navigate(['gestioneDipendenti/listaDipendenti']);
  }

  //limit calendar to past dates
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
}


