import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { PeopleComponent } from './people/people.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteAssign';

@Input('Swapidata') peopleData: any;

@ViewChild(PeopleComponent, {static: false}) PeopleComponent;

ngAfterViewInit() {
    console.log(this.PeopleComponent.people.value)
    this.peopleData = this.PeopleComponent.people
  }
}
