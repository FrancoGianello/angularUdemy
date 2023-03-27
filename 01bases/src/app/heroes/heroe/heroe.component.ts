import {Component} from "@angular/core"



@Component({
    selector: "app-heroe",
    // template:`
    //     <h1>Hola</h1>
    // `
    templateUrl: "./heroe.component.html"
})

export class HeroeComponent{
    nombre:string = "Madman"
    edad:number = 30
    
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string{
        return ` ${this.nombre} - ${this.edad} `
    }

    cambiarNombre():void{
        this.nombre="bataman"
    }
    
    cambiarEdad():void{
        this.edad= 49
    }
}