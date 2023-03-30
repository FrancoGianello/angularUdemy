import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
  termino:string =""
  hayError:boolean = false
  paises: Pais[]=[]
  paisesSugeridos:Pais[]=[]
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService){}
  buscar(busqueda:string){
    
    this.mostrarSugerencias=false;
    this.hayError=false;
    this.termino=busqueda

    this.paisService.buscarPais(this.termino)
    .subscribe((data)=>{
      this.paises=data
    }, 
    (error)=>{
      this.hayError=true
      this.paises=[]
    })
  }

  sugerencias(valor:string){
    this.termino=valor
    this.hayError=false;
    this.mostrarSugerencias=true;

    this.paisService.buscarPais(valor)
      .subscribe(
        resp=>this.paisesSugeridos=resp.splice(0,3),
        (err)=>this.paisesSugeridos=[]
        )
  }
}
