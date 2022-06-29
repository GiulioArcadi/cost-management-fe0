import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contratto } from 'src/app/model/contratto';
import { Daticontratto } from 'src/app/model/daticontratto';
import { TipologiaContratto } from 'src/app/model/tipologia-contratto/tipologia-contratto';
import { ContrattoService } from 'src/app/services/contratto-service/contratto.service';
import { DipendenteService } from 'src/app/services/dipendente-service/dipendente.service';
import { TipologiacontrattoService } from 'src/app/services/tipologia-contratto-service/tipologiacontratto.service';

@Component({
  selector: 'app-dati-contrattuali',
  templateUrl: './dati-contrattuali.component.html',
  styleUrls: ['./dati-contrattuali.component.css']
})
export class DatiContrattualiComponent implements OnInit {

  daticontrattuali: Observable<Daticontratto[]>;

  tipologiecontratto: Observable<TipologiaContratto[]>;

  contratti: Contratto[]=[];

  tipologie : TipologiaContratto[];

  constructor(private contrattoService: ContrattoService,
    private tipologiacontrattoService:TipologiacontrattoService,
    private dipendenteService:DipendenteService) {
    this.reloadData();
   }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.tipologiecontratto = this.tipologiacontrattoService.getAllTipologiaContratto();

    this.tipologiecontratto.subscribe(result => {
      this.tipologie=result;
    });
    
    this.daticontrattuali = this.contrattoService.getDatiContratti();

    //this.daticontrattuali.subscribe(result => this.contratti.length=result.length);

    this.contratti.length=0;

    this.daticontrattuali.subscribe(result => {
      for(let datocontrattuale of result)
      {
        this.contratti.push(new Contratto());
      }
    });
  }

  Save(index:number)
  {
    this.daticontrattuali.subscribe(datocontrattuale => {
        this.dipendenteService.findDipendenteById(datocontrattuale[index].codiceFiscale).subscribe(result => {
          this.contratti[index].dipendente = result;
          
          console.log(this.contratti);

          console.log(this.contrattoService.insertContratto(this.contratti[index]).toPromise());
        });
    });
  }

}
