import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private servicioUrl = "https://api.giphy.com/v1/gifs"
  private APIKEY:string = "yI45TbboI4GtUp1CnMmFWe6APFdsKTH1"
  private limit:number = 10
  private _historial: string[] =[]

  public resultados:Gif[]= []

  get historial():string[]{
    this._historial=this._historial.slice(0,10)
    return [...this._historial]
  }
  
  constructor(private http:HttpClient) { 
      this._historial = JSON.parse(localStorage.getItem("historial") !) || []
  }
  

  buscarGifs(query:string){
    
    query = query.toLowerCase()
    if(query.length===0){
      return
    }
    if(!this._historial.includes(query)){

      this._historial.unshift(query)

    }
    else{
      for (let i = 0; i < this._historial.length; i++) {
        if(this._historial[i]==query){
          this._historial.unshift(this._historial.splice(i, 1)[0]);
        }
      }
    }

    localStorage.setItem("historial", JSON.stringify(this._historial))

    const params = new HttpParams()
    .set("api_key", this.APIKEY,)
    .set("q",query)
    .set("limit", this.limit)

    this.http.get<SearchGifResponse>(`
     ${this.servicioUrl}/search`,{params}).subscribe((resp:SearchGifResponse)=>{
      this.resultados=resp.data
      localStorage.setItem("resultados", JSON.stringify(resp.data))
    })

  }



}
