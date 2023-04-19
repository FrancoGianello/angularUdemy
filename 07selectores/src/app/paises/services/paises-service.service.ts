import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais, PaisSmall } from '../interfaces/pais.interface';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  constructor(private http:HttpClient){}
  private baseUrl:string = "https://restcountries.com/v3.1"
  private _regions:string[] = ["america", "asia", "africa", "europe", "oceania"]

  get regions():string[]{
    return this._regions
  }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{

    const url: string = `${this.baseUrl}/region/${region}?fields=cca3&fields=name`;
    return this.http.get<PaisSmall[]>(url);

  }

  getPaisPorCodigo(codigo: string): Observable <Pais[]> {

    if(!codigo){
      return of([])
    }
    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }


  getPaisPorCodigoSm(codigo: string): Observable <PaisSmall> {  
    const url = `${this.baseUrl}/alpha/${codigo}?fields=cca3&fields=name`;
    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigos(fronteras: string[]): Observable<PaisSmall[]>{
    if(!fronteras){
      return of([]);
    }
    const solicitudes: Observable<PaisSmall>[] = [];
    fronteras.forEach( codigo => {
      const solicitud = this.getPaisPorCodigoSm(codigo);
      solicitudes.push( solicitud );
    });

    return combineLatest( solicitudes );
  }
}
