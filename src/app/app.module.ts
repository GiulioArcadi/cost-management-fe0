import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { TipologiacontrattoComponent } from './tipologiacontratto/tipologiacontratto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatiContrattualiComponent } from './dati-contrattuali/dati-contrattuali.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DettaglioDipendentiComponent } from './dettaglio-dipendenti/dettaglio-dipendenti.component';
import { GestioneCommessaComponent } from './gestione-commessa/gestione-commessa.component';
import { CommessaAddComponent } from './commessa-add/commessa-add.component';
import { DipendenteCommessaComponent } from './dipendente-commessa/dipendente-commessa.component';
import{ NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DettaglioDipendentiConformuleComponent } from './dettaglio-dipendenti-conformule/dettaglio-dipendenti-conformule.component';
import { CommessaUpdateComponent } from './commessa-update/commessa-update.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { CommessaListComponent } from './commessa-list/commessa-list.component';

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
    DatiContrattualiComponent
    
       
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
