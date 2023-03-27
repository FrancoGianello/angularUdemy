import { Component } from "@angular/core"
 

@Component({
    selector: "app-contador",
    template:`
        <h1>{{ titulo }}</h1>

        <h3>La base es: {{base}}</h3>

        <button (click)="acumular(base)" >+ {{base}}</button>
        <button (click)="acumular(-base)">- {{base}}</button>

        <h2>{{ contador }}</h2>    
    `
})
export class ContadorComponent{
    titulo: string = 'Francis App';
    contador: number = 0
    base: number = 5
  
    acumular(valor:number):void{
      this.contador+=valor
    }

}