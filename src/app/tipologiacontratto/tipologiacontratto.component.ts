import { Component, OnInit } from '@angular/core';
import { TipologiacontrattoService } from '../services/tipologiacontratto.service';
import { TipologiaContratto } from './tipologia-contratto';

@Component({
  selector: 'app-tipologiacontratto',
  templateUrl: './tipologiacontratto.component.html',
  styleUrls: ['./tipologiacontratto.component.css']
})
export class TipologiacontrattoComponent implements OnInit {

  contratto = new TipologiaContratto();
  msg = "";
  
  constructor(private service : TipologiacontrattoService) { }

  ngOnInit(): void {
  }

  addContratto(){
    this.service.addContratto(this.contratto).subscribe( 
      response => {
        console.log("contratto"+this.contratto);
        console.log("response recived");
        console.log(response);
        if(response)
        {console.log("contratto aggiunto");}
        else
        {console.log("contratto non aggiunto");}
      },
      error => {
        console.log("exeption occurred");
      }
    );
  }

}
