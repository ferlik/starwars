import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetService} from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css'],
})
export class PlanetDetailComponent implements OnInit {
  id:number;
  planet:Planet;

  constructor(private route: ActivatedRoute, private PlanetService: PlanetService ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.planet = this.PlanetService.getOnePlanetById (this.id);
    console.log(this.planet)
  }

}
