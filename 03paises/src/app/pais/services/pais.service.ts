import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private APIURL:string = "https://restcountries.com/v3.1"

  get httpParams():HttpParams{
    return new HttpParams()
    .set(
      'fields',
      'name,capital,cca2,population,region,flags'
    )

  }

  constructor(private http:HttpClient) { }

  buscarPais(busqueda:string): Observable<Pais[]>{
    const url = `${this.APIURL}/name/${busqueda}`

    return this.http.get<Pais[]>(url,  {params: this.httpParams})
  }

  buscarCapital(busqueda:string): Observable<Pais[]>{
    const url = `${this.APIURL}/capital/${busqueda}`

    return this.http.get<Pais[]>(url,  {params: this.httpParams})
  }

  buscarRegion(busqueda:string): Observable<Pais[]>{
    
    const url = `${this.APIURL}/region/${busqueda}`
    console.log(url)
    return this.http.get<Pais[]>(url, {params: this.httpParams})
  }

  getDetallePais(id:string):Observable<Pais>{
    const url = `${this.APIURL}/alpha/${id}`
    return this.http.get<Pais>(url)

  }

}
