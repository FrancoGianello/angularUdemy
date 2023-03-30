import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable, tap } from 'rxjs';
import { Pais, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit{

  pais!:Pais;
  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
  ){}
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}):Observable<Pais>=> this.paisService.getDetallePais(id))
        ,tap(console.log)
      )
      .subscribe(pais=> {
        //esto no se por que tengo que hacerlo
        this.pais=pais[0]
      })

    // this.activatedRoute.params
    //   .subscribe(({id})=>{
    //     this.paisService.getDetallePais(id)
    //       .subscribe(pais=>{
    //         console.log(pais)
    //       })
    //   })
  }



}
