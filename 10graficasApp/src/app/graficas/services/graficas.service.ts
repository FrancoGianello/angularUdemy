import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }

  getRedesSociales(){
    return this.http.get("http://localhost:3000/grafica")
  }

  getRedesSocialesFormatDonut(){
    return this.getRedesSociales()
      .pipe(
        map(m=>{
          const labels = Object.keys(m)
          const data = Object.values(m)
          return {labels, data}
        })
      )

  }
}
