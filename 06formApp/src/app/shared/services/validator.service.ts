import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  myForm: any;

  constructor() { }

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = (control:FormControl): ValidationErrors | null =>{
      const value:string = control.value.trim().toLowerCase()

      if(value=='strider'){
          return {
              noStrider:true,
          }
      }else return null
  }
  isValidField(myForm:FormGroup, field:string):boolean |null{

    return myForm.controls[field].errors && myForm.controls[field].touched
  }

  passwordMatch(value1:string, value2:string){
    return ( formGroup:FormGroup ):ValidationErrors | null =>{
      const valueField1 = formGroup.get(value1)?.value
      const valueField2 = formGroup.get(value2)?.value

      if(valueField1 !== valueField2){
        formGroup.get(value2)?.setErrors({notEqual:true})
        return { notEqual:true }
      }

      formGroup.get(value2)?.setErrors(null)

      return null

    }
  }
}
