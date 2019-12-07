import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SwapiPlanets } from './swapi';

@Injectable({
  providedIn: 'root'
})
export class StarwarsPlanetsService {
  public url = 'https://swapi.co/api/planets/';
  constructor(private http: HttpClient) {}

  getData(url) : Observable<SwapiPlanets[]> {
    return this.http.get<SwapiPlanets[]>(this.url)
    .pipe(map(res => {return res['results'];}));
    }
}
