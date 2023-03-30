import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones:string[]=["africa","americas", "asia", "europe", "oceania"]
  regionActiva:string=""
  paises: Pais[]=[]

  activarRegion(activa:string){
    if(activa==this.regionActiva) 
      return

    this.regionActiva=activa
    this.paises=[]
    this.paisService.buscarRegion(activa)
    .subscribe((data)=>{
      this.paises=data
    })
  }
  getClaseCSS(region:string):string{
    return (region==this.regionActiva )? 'btn btn-primary' : 'btn btn-outline-primary'
  }
  constructor(private paisService:PaisService){}
}
