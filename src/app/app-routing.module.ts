import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { PlanningComponent } from './planning/planning.component';
import { FaqComponent } from './faq/faq.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{ path: 'programmes', component: ProgrammesComponent },
{ path: 'planning', component: PlanningComponent },
{ path: 'faq', component: FaqComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'partenaires', component: PartenairesComponent },
{ path: 'carte', component: CarteComponent },
{path: 'admin', component: AdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
