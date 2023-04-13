import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18Select
  nombre: string = "Fernando"
  genero:string = "masculino"

  invitacionMapa = {
    "masculino":"invitarlo",
    "femenino":"invitarla",
  }
  cambiarNombre(){
    this.nombre="María"
    this.genero="femenino"
  }

  //i18Plural
  clientes:string[]=["maria","pedro","mary","francis","deez","javi","gamer","gaymer"]
  clientesMapa={
    "=0":"no tenemos ningún cliente esperando",
    "=1":"tenemos 1 cliente esperando",
    "other":"tenemos # clientes esperando", 
  }
  borrarNombre(){
    this.clientes.pop()
  }
  resetClientes(){
    this.clientes = ["maria","pedro","mary","francis","deez","javi","gamer","gaymer"]
  }


  persona = {
    nombre:"Francis",
    edad:69,
    direccion:"Deez, nuts"
  }
  //json
  personajes = [
    {
      nombre:"El bicho friu",
      hacer_siu:true
    },
    {
      nombre:"Pessi",
      hacer_siu:false
    },
    {
      nombre:"JFK",
      hacer_siu:false
    },
    {
      nombre:"Yo",
      hacer_siu:true
    }
  ]

  //async

  miObservable = interval(500, )

  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
        resolve("Fin de la promesa")
    }, 3500);
  })
}
