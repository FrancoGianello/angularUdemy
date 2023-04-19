import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })
  constructor(private fb:FormBuilder){}

  default = {
    name:"bicho",
    price:10,
    inStorage:0
  }

  public myForm:FormGroup = this.fb.group({
    name:['', [ Validators.required, Validators.minLength(3)]],
    price:[0, [Validators.required, Validators.min(0)]],
    inStorage:[0,  [Validators.required, Validators.min(0)]],
  })

  ngOnInit(): void {
    this.myForm.reset(this.default)
  }

  isValidField(field:string):boolean |null{

    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError(field:string):string | null{

    if(!this.myForm.controls[field]) return null

    const errores = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio'      
        case 'minlength':
          return `Mínimo ${errores['minlength'].requiredLength} caracteres`
      }
    }

    return ''
  }

  onSave():void{
    if(this.myForm.invalid) return
    console.log(this.myForm.value)
    this.myForm.reset({price:0,inStorage:0})
  }
}
