import { Component, OnInit } from '@angular/core';
import { StarwarsPlanetsService } from '../starwars-planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  public planets;
  public url = 'https://swapi.co/api/planets/';

    constructor(private _peopleService: StarwarsPlanetsService) {}
    
    ngOnInit() {
      this.getPlanet();
    }
    getPlanet(){
      this._peopleService.getData(this.url).subscribe(
        data => {this.planets = data},
        err => console.error(err),
        () => console.log('returned object')
      );
    }
  }
