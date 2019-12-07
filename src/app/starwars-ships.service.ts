import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SwapiShips } from './swapi';

@Injectable({
  providedIn: 'root'
})
export class StarwarsShipsService {

public url = 'https://swapi.co/api/starships/';
  constructor(private http: HttpClient) {}

  getData(url) : Observable<SwapiShips[]> {
    return this.http.get<SwapiShips[]>(this.url)
    .pipe(map(res => {return res['results'];}));
    }
}
