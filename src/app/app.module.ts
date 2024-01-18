import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './menuComponent/home/home.component';
import { AziendaComponent } from './menuComponent/azienda/azienda.component';
import { ServiziComponent } from './menuComponent/servizi/servizi.component';
import { TelegestioneComponent } from './menuComponent/telegestione/telegestione.component';
import { RealizzazioniComponent } from './menuComponent/realizzazioni/realizzazioni.component';
import { ContattiComponent } from './menuComponent/contatti/contatti.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AziendaComponent,
    ServiziComponent,
    TelegestioneComponent,
    RealizzazioniComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
