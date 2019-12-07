import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Swapi } from './swapi';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  
  url = 'https://swapi.co/api/people/';
  constructor(private http: HttpClient) {}

  getData(url) : Observable<Swapi[]> {
    return this.http.get<Swapi[]>(this.url)
    .pipe(map(res => {return res['results'];}));
    }
}
