import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Azienda } from '../azienda';
import { AziendaService } from '../azienda.service';
import { Dipendente } from '../dipendente';
import { DipendenteService } from '../dipendente.service';

@Component({
  selector: 'app-update-dipendente',
  templateUrl: './update-dipendente.component.html',
  styleUrls: ['./update-dipendente.component.css']
})
export class UpdateDipendenteComponent implements OnInit {
  aziendaValue : any;
  codiceFiscale: string;
  dipendente: Dipendente;
  aziende: Observable<Azienda[]>;
  //aziendaNome:any;
  oldAziendaId: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private dipendenteServ: DipendenteService, private aziendaService: AziendaService) {
    this.loadAziende();
    
  }

  async loadAziende() {
    await new Promise(f => setTimeout(f, 50));
    this.aziende = this.aziendaService.findAllAziende();
    
  }

  ngOnInit(): void {
    console.log("INSIDE INIT MetHOD -- UPDATEDIPENDENTE COMPONENT")
    this.dipendente = new Dipendente();
    this.codiceFiscale = this.route.snapshot.params['codiceFiscale'];
    this.aziendaValue = this.route.snapshot.params['aziendaId'];
    
    this.dipendenteServ.findDipendenteById(this.codiceFiscale)
      .subscribe(data => {
        console.log(data)
        this.dipendente = data;
        this.oldAziendaId = this.dipendente.azienda.id;
      }, error => console.log(error));
  }

  changeClient(value: any) {
    this.aziendaValue = value;
    console.log("AZIENDA VALUE ON CHANGE: "+ this.aziendaValue);
  }

  onSubmit() {
    this.dipendenteServ.updateDipendente(this.dipendente, this.dipendente.codiceFiscale, this.aziendaValue)
      .subscribe(data => { console.log(data), this.goToList() }, error => console.log(error)
      );
  }

  goToList() {
    this.router.navigate(['gestioneDipendenti/listaDipendenti']);
    //return false;
  }
   //limit calendar to past dates
   getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}
