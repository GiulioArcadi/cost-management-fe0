import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAddComponent } from './component/cliente-add/cliente-add.component';
import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './component/cliente-update/cliente-update.component';
import { CommessaAddComponent } from './component/commessa-add/commessa-add.component';
import { CommessaListComponent } from './component/commessa-list/commessa-list.component';
import { CommessaRicercaComponent } from './component/commessa-ricerca/commessa-ricerca.component';
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
  { path: "gestioneCommessa/commessaRicerca" , component: CommessaRicercaComponent},
  { path: "gestioneCommessa/commessaRicerca/:nominativo" , component: CommessaRicercaComponent},
  { path: "gestioneCommessa/dipendente_commessa" , component: DipendenteCommessaComponent},
  { path: "gestioneDipendenti/dettaglio_dipendenti_conformule" , component: DettaglioDipendentiConformuleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                              
  exports: [RouterModule ]
})
export class AppRoutingModule { }
