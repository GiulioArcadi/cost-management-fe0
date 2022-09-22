import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import{ NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClienteAddComponent } from './component/cliente-add/cliente-add.component';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './component/cliente-update/cliente-update.component';
import { CommessaAddComponent } from './component/commessa-add/commessa-add.component';
import { CommessaListComponent } from './component/commessa-list/commessa-list.component';
import { CommessaUpdateComponent } from './component/commessa-update/commessa-update.component';
import { CreateDipendenteComponent } from './component/create-dipendente/create-dipendente.component';
import { DatiContrattualiComponent } from './component/dati-contrattuali/dati-contrattuali.component';
import { DettaglioDipendentiConformuleComponent } from './component/dettaglio-dipendenti-conformule/dettaglio-dipendenti-conformule.component';
import { DettaglioDipendentiComponent } from './component/dettaglio-dipendenti/dettaglio-dipendenti.component';
import { DipendenteCommessaComponent } from './component/dipendente-commessa/dipendente-commessa.component';
import { DipendenteListComponent } from './component/dipendente-list/dipendente-list.component';
import { GestioneCommessaComponent } from './component/gestione-commessa/gestione-commessa.component';
import { GestioneDipendenteComponent } from './component/gestione-dipendente/gestione-dipendente.component';
import { LoginComponent } from './component/login/login.component';
import { LoginsuccessComponent } from './component/loginsuccess/loginsuccess.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TipologiacontrattoComponent } from './component/tipologiacontratto/tipologiacontratto.component';
import { UpdateDipendenteComponent } from './component/update-dipendente/update-dipendente.component';
import { clienteAddValidatorDirective } from 'src/app/cliente-add.directive';
import { clienteAddSecValidatorDirective } from './cliente-add-sec-directive';
import { CommessaRicercaComponent } from './component/commessa-ricerca/commessa-ricerca.component';
import { DettaglioDipendentiStoricoComponent } from './component/dettaglio-dipendenti-storico/dettaglio-dipendenti-storico.component';
@NgModule({
  declarations: [
    GestioneDipendenteComponent,
    DettaglioDipendentiComponent,
    CreateDipendenteComponent,
    UpdateDipendenteComponent,
    DipendenteListComponent,
    ClienteAddComponent,
    ClienteUpdateComponent,
    ClienteListComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    TipologiacontrattoComponent,
    NavbarComponent,
    GestioneCommessaComponent,
    CommessaAddComponent,
    CommessaUpdateComponent,
    CommessaListComponent,
    DipendenteCommessaComponent,
    DettaglioDipendentiConformuleComponent,
    DatiContrattualiComponent,
    clienteAddValidatorDirective,
    clienteAddSecValidatorDirective,
    CommessaRicercaComponent,
    DettaglioDipendentiStoricoComponent,
    
       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    NoopAnimationsModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
