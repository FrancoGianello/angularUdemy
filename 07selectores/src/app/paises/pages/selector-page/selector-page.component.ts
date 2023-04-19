import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises-service.service';
import { Pais, PaisSmall } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private paisesServices:PaisesService
  ){}
  public regions:string[]=[]
  public paises:PaisSmall[]=[]
  public fronteras:PaisSmall[]=[]
  public cargando:boolean = false

  public myForm:FormGroup = this.fb.group({
    region:   ["",Validators.required ],
    pais:     ["",Validators.required],
    frontera:["",Validators.required],
  })

  save(){
    console.log(this.myForm.value)
  }
  
  ngOnInit(): void {

    this.regions = this.paisesServices.regions
    // this.myForm.get('region')?.valueChanges
    //   .subscribe(region=>{
    //     console.log(region)

    //     this.paisesServices.getCountryByRegion(region)
    //       .subscribe(paises=>{
    //         this.paises=paises
    //       })
    //   })

    this.myForm.get('region')?.valueChanges
      .pipe(
        tap( () =>{
          this.myForm.get('pais')?.reset('')
          this.cargando=true
        }),
        switchMap( region =>this.paisesServices.getPaisesPorRegion(region))
      )
      .subscribe(paises=>{
        this.paises=paises
        this.cargando = false
      })

    this.myForm.get('pais')?.valueChanges
      .pipe(
        tap( () =>{
          this.fronteras=[]
          this.myForm.get('frontera')?.reset('')
          this.cargando = true
        }),
        switchMap(code=>this.paisesServices.getPaisPorCodigo(code)),
        switchMap(pais=>this.paisesServices.getPaisesPorCodigos(pais[0]?.borders!))
      )
      .subscribe(
        paises=>{
          if(paises) 
          // this.fronteras=pais[0]?.borders || []
          this.fronteras = paises
          this.cargando = false
        }
      )
  }

}
