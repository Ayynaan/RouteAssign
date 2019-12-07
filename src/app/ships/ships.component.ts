import { Component, OnInit } from '@angular/core';
import { StarwarsShipsService } from '../starwars-ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  public ships;
  public url = 'https://swapi.co/api/starships/';

    constructor(private _peopleService: StarwarsShipsService) {}
    
    ngOnInit() {
      this.getShips();
    }
    getShips(){
      this._peopleService.getData(this.url).subscribe(
        data => {this.ships = data},
        err => console.error(err),
        () => console.log('returned object')
      );
    }
  }
