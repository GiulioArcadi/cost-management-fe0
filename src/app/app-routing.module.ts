import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { TipologiacontrattoComponent } from './tipologiacontratto/tipologiacontratto.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { DipendenteListComponent } from './dipendente-list/dipendente-list.component';
import { CreateDipendenteComponent } from './create-dipendente/create-dipendente.component';
import { UpdateDipendenteComponent } from './update-dipendente/update-dipendente.component';
import { GestioneDipendenteComponent } from './gestione-dipendente/gestione-dipendente.component';
import { DettaglioDipendentiComponent } from './dettaglio-dipendenti/dettaglio-dipendenti.component';
import { GestioneCommessaComponent } from './gestione-commessa/gestione-commessa.component';
import { CommessaAddComponent } from './commessa-add/commessa-add.component';
import { DipendenteCommessaComponent } from './dipendente-commessa/dipendente-commessa.component';
import { DettaglioDipendentiConformuleComponent } from './dettaglio-dipendenti-conformule/dettaglio-dipendenti-conformule.component';
import { DatiContrattualiComponent } from './dati-contrattuali/dati-contrattuali.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommessaUpdateComponent } from './commessa-update/commessa-update.component';
import { CommessaListComponent } from './commessa-list/commessa-list.component';
import { ProveComponent } from './prove/prove.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';



const routes: Routes = [
  { path: "navbar" , component: NavbarComponent},
  { path: "" , component: LoginComponent},
  { path: "loginsuccess" , component: LoginsuccessComponent},
  { path: "registration" , component: RegistrationComponent},
  { path: "tipologia_contratto" , component: TipologiacontrattoComponent},
  { path: "datiContrattuali", component: DatiContrattualiComponent},
  { path: "gestioneDipendenti/datiContrattuali", component: DatiContrattualiComponent},
  { path: "clienti", component: ClienteListComponent},
  { path: "clienti/add", component: ClienteAddComponent},
  { path: "clienti/:pIva", component: ClienteUpdateComponent},
  { path: "registration" , component: RegistrationComponent},
  { path: "gestioneDipendenti/listaDipendenti" , component: DipendenteListComponent},
  { path: "updateDipendente/:codiceFiscale/:aziendaId" , component: UpdateDipendenteComponent},
  { path: "gestioneDipendenti/inserisciDipendente" , component: CreateDipendenteComponent},
  { path: "gestioneDipendenti" , component: GestioneDipendenteComponent},
  { path: "dettaglioDipendenti" , component: DettaglioDipendentiComponent},
  { path: "gestioneDipendenti/dettaglioDipendenti" , component: DettaglioDipendentiComponent},
  { path: "gestioneCommessa" , component: GestioneCommessaComponent},
  { path: "gestioneCommessa/commessaAdd" , component: CommessaAddComponent},
  { path: "gestioneCommessa/commessaUpdate/:codice" , component: CommessaUpdateComponent},
  { path: "gestioneCommessa/commessaList" , component: CommessaListComponent},
  { path: "gestioneCommessa/dipendente_commessa" , component: DipendenteCommessaComponent},
  { path: "gestioneDipendenti/dettaglio_dipendenti_conformule" , component: DettaglioDipendentiConformuleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                              
  exports: [RouterModule ]
})
export class AppRoutingModule { }
