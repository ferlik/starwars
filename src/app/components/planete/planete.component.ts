import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { LoggerService } from 'src/app/services/logger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})
export class PlaneteComponent implements OnInit {

  planet: Planet [];
  constructor(private planetservice:PlanetService, private loggerService:LoggerService, private toto : ToastrService) { }

  ngOnInit(): void {
    this.planet = this.planetservice.getAllPlanets();
    this.loggerService.logg();
  }
  deletePlanet(planet:Planet) {
    this.planet = this.planetservice.deletePlanet(planet);
    this.toto.error("la planete " + planet.nom + " a bien été supprimée")

  }
}
