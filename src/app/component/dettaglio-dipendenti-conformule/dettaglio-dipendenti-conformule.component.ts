import { Component, OnInit } from '@angular/core';
import { Dipendente } from 'src/app/model/dipendente';

@Component({
  selector: 'app-dettaglio-dipendenti-conformule',
  templateUrl: './dettaglio-dipendenti-conformule.component.html',
  styleUrls: ['./dettaglio-dipendenti-conformule.component.css']
})
export class DettaglioDipendentiConformuleComponent implements OnInit {

  dipendenti: Dipendente[];
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(){}
  onArchivia(){}
}
