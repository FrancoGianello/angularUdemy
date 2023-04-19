import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-swtiches-page',
  templateUrl: './swtiches-page.component.html',
  styleUrls: ['./swtiches-page.component.css']
})
export class SwtichesPageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  public myForm:FormGroup = this.fb.group({
    gender:["M",Validators.required],
    wantNotifications:[true,Validators.required],
    termsNotifications:[false,Validators.requiredTrue],
  })

  public person = {
    gender:"F",
    wantNotifications:false
  }

  ngOnInit() {
    this.myForm.reset(this.person)
  }
  isValidField(field:string):boolean |null{

    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
  onSave(){
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    //esto saca los terms gracias a la desestructuracion
    const { termsNotifications, ...newPerson} = this.myForm.value

    this.person=newPerson

  }

}
