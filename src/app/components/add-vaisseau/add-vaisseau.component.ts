import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {
  vaisseau: Vaisseau;
  constructor(private vaisseauService: VaisseauService, private router:Router) {

   }

  ngOnInit(): void {
    this.vaisseau = new Vaisseau();
  }
  creationVaisseau (): void {
    console.log(this.vaisseau);
    this.vaisseauService.addVaisseau(this.vaisseau);
    this.router.navigate(['/vaisseaux']);
  }
}
