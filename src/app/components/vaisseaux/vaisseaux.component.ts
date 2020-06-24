import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService, private vaisseauLogger: LoggerService) { }

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVaisseau();
    this.vaisseauLogger.logg();
  }

}
