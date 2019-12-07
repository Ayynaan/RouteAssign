import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {StarwarsService} from '../starwars.service';
import { Swapi } from '../swapi';
import { async } from 'q';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
public people;
public url = 'https://swapi.co/api/people/';


@Output() Swapidata = new EventEmitter<any>();

valueSet(i){
  i = i[0];
  console.log(i);
  console.log(this.people[i]);
  this.Swapidata.emit(this.people[i]);
  
}
  constructor(private _peopleService: StarwarsService) {}
  
  
  ngOnInit() {
    this.getPeople();
  }
  getPeople(){
    this._peopleService.getData(this.url).subscribe(
      data => {this.people = data},
      err => console.error(err),
      () => console.log('returned object')
    );
  }
}
