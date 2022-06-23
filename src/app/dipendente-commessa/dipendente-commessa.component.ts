import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commessa } from '../commessa';
import { CommessaService } from '../commessa.service';
import { Dipendente } from '../dipendente';
import { DipendenteCommessaService } from '../dipendente-commessa.service';
import { DipendenteService } from '../dipendente.service';
import { DipendenteCommessa } from '../dipendenteCommessa';
import { DipendenteCommessaPK } from '../dipendenteCommessaPK';
declare let alertify: any;


@Component({
  selector: 'app-dipendente-commessa',
  templateUrl: './dipendente-commessa.component.html',
  styleUrls: ['./dipendente-commessa.component.css']
})
export class DipendenteCommessaComponent implements OnInit {
  dipendente = new Dipendente();
  dipendenteCommessa = new DipendenteCommessa();
  dipendenteCommessaCodice: string = "";
  dipendenteCommessaDipendente: string = "";
  commessaCodice: string;
  commessa = new Commessa();

  commesse = new Observable<Commessa[]>();
  dipendenti = new Observable<Dipendente[]>();
  dipdendenteCommmessaPK = new DipendenteCommessaPK(this.dipendenteCommessaCodice, this.dipendenteCommessaDipendente);
  tipologiaCommessa: string;
  
 
  //associa riosrsa tariffa
  risorsaAssociata :boolean = false;
  nome:string;
  cognome:string;
  aggiungiTriffaComboBox:boolean = false;

  constructor(private commessaService: CommessaService,
    private dipendenteCommessaService: DipendenteCommessaService,
    private dipendenteService: DipendenteService, private router: Router) { }

  ngOnInit(): void {
    this.loadCommesse();
    this.loadDipendenti();
  }

  async loadCommesse() {
    await new Promise(f => setTimeout(f, 50));
    this.commesse = this.commessaService.findAllCommesse();
  }

  async loadDipendenti() {
    await new Promise(f => setTimeout(f, 50));
    this.dipendenti = this.dipendenteService.findAllDipendenti();
    
    }



  changeCodiceCommessa(value: any) {
    console.log(this.dipendente);
     if (!(Object.keys(this.dipendente).length === 0)) {
    this.loadDipendenti();
    this.aggiungiTriffaComboBox = false;
    this.risorsaAssociata = false;
     }
    this.commessa = value;
    this.dipendenteCommessaCodice = this.commessa.codice;
    //console.log("IMPORTO: ");
    //console.log(this.commessa.importo);
    this.tipologiaCommessa = this.commessa.tipologiaCommessa;
  }

  changeDipendente(value: any) {
    if (!(Object.keys(this.dipendente).length === 0)) {
     this.dipendenteCommessa.tariffaGg = null;
      this.dipendenteCommessa.dataFineAttivita = new Date();
      this.dipendenteCommessa.dataInizioAttivita = new Date();

    }
    this.dipendente = value;
    this.dipendenteCommessaDipendente = this.dipendente.codiceFiscale;
    this.risorsaAssociata = true;
    this.nome = this.dipendente.nome;
    this.cognome= this.dipendente.cognome;

  }

  aggiungiTariffa(){
    this.aggiungiTriffaComboBox = true;
  }
 

  onSubmit() {
    this.dipdendenteCommmessaPK.codiceCommessa = this.dipendenteCommessaCodice;
    this.dipdendenteCommmessaPK.dipendenteCodiceFiscale = this.dipendenteCommessaDipendente;
    this.dipendenteCommessa.id = this.dipdendenteCommmessaPK;
    //console.log(this.dipendenteCommessa.importo);
   
 this.dipendenteCommessaService.
      addDipendenteCommessa(this.dipendenteCommessa, this.dipendenteCommessaCodice).toPromise()
      .then(res => {
        console.log(res);
        if (res == null) {
          alertify.error("Il dipendente e' gia' associato a questa commessa!");
        } else {
          this.goToList();
        }
      });
    
 /*
    this.dipendenteCommessaService.
      addDipendenteCommessa(this.dipendenteCommessa, this.dipendenteCommessaCodice).toPromise()
      .then(x => this.goToList(), error => console.log(error));
      */
  }

  goToList() {
    alertify.success('Dipendente inserito!');
    this.tipologiaCommessa ="";
    this.aggiungiTriffaComboBox = false;
    this.ngOnInit();
        
      
  }

}
