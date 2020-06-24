import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PlaneteComponent } from './components/planete/planete.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { FormsModule} from '@angular/forms';
import { InitialPipe } from './pipes/initial.pipe';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaneteComponent,
    VaisseauxComponent,
    PlanetDetailComponent,
    VaisseauDetailComponent,
    MenuComponent,
    AddPlanetComponent,
    AddVaisseauComponent,
    InitialPipe,
    EditPlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
