import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from 'src/app/environments/environments';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHero(value:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${value}`)
  }

  getSugerencias(value:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${value}&_limit=5`)
  }

  addHero(value:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, value)
  }
  updateHero(value:Heroe):Observable<Heroe>{
    if(!value.id) throw Error("Hero id is required")
    return this.http.patch<Heroe>(`${this.baseUrl}/heroes/${value.id}`, value)
  }
  deleteHero(value:Heroe):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/heroes/${value.id}`).
      pipe(
        map(resp=>true),
        catchError(err => of(false)),
      )
  }
}
