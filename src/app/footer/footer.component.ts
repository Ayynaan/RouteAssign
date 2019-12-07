import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Swapi } from '../swapi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 @Input() people: any;

  constructor() { }

  ngOnInit() {
  }
}
