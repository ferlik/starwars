import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { PlaneteComponent} from './components/planete/planete.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';
import { EditPlanetComponent } from './components/edit-planet/edit-planet.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'planete', component: PlaneteComponent },
  { path: 'planets/ajout', component: AddPlanetComponent},
  { path: 'planets/:id', component: PlanetDetailComponent},
  { path: 'vaisseaux/ajout', component: AddVaisseauComponent},

  { path: 'vaisseau/:id', component: VaisseauDetailComponent},
  { path: 'planets/update/:id', component: EditPlanetComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
