import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/venta.interfaces';
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  nombre:String = "francis"
  mayus:boolean = false

  toggleMayus(){
    this.mayus = !this.mayus
  }
  criterio: string =""
  heroes: Heroe[]= [
    {
      nombre:"Superman",
      vuela:true,
      color:Color.azul
    } ,
    {
      nombre:"Batman",
      vuela:false,
      color:Color.negro
    } ,
    {
      nombre:"Linterna verde",
      vuela:true,
      color:Color.verde
    } ,
    {
      nombre:"Messi",
      vuela:true,
      color:Color.azul
    } ,
    {
      nombre:"Jesus",
      vuela:false,
      color:Color.rojo
    } ,
  ]

  cambiarOrden(value:string){
    this.criterio=value
  }

}
