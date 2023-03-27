import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input("inserccion") nuevo:Personaje ={
    nombre:"",
    poder:0
  }
  constructor(private dbzService:DbzService){}
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(){
    if(this.nuevo.nombre.length === 0){
      return 
    }
    this.dbzService.agregarPersonaje(this.nuevo)
    // this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo={
      nombre:"",
      poder:0
    }
  }
}
