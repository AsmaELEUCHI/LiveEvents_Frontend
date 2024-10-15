import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { PlanningComponent } from './planning/planning.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { FaqComponent } from './faq/faq.component';
import { CarteComponent } from './carte/carte.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgrammesComponent,
    PlanningComponent,
    PartenairesComponent,
    FaqComponent,
    CarteComponent,
    ContactComponent,
    AdminDashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
