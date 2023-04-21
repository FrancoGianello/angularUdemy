import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  constructor(private fb:FormBuilder){}

  public color="red"
  public texto1:string = "siu"

  myForm: FormGroup = this.fb.group({
    nombre:['',Validators.required ]
  })

  tieneError(field:string):boolean{
    return !this.myForm.get(field)?.invalid || false
  }

  cambiarNombre(){
    this.texto1 =Math.random().toString()
  }
  
  cambiarColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
