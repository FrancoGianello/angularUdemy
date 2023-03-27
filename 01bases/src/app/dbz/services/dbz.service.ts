import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{
    private _personajes:Personaje[]=[
    {
      nombre:"Goku",
      poder:10000
    },
    {
      nombre:"Vegeta",
      poder:85000
    }
  ]

  get personajes():Personaje[]{
    return [...this._personajes]
  }

    constructor(){}

  agregarPersonaje(pj:Personaje){
    this._personajes.push(pj)
  }
}