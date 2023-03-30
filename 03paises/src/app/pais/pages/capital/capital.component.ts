import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  termino:string =""
  hayError:boolean = false
  paises: Pais[]=[]

  constructor(private paisService:PaisService){}
  buscar(busqueda:string){
    
    this.hayError=false;
    this.termino=busqueda

    this.paisService.buscarCapital(this.termino)
    .subscribe((data)=>{
      this.paises=data
    }, 
    (error)=>{
      this.hayError=true
      this.paises=[]
    })
  }

  sugerencias(valor:string){
    this.hayError=false;
  }
}
