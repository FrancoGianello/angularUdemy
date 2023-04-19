import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/services/email-validator.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';
// import * as customVal from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator:EmailValidatorService
  ) { }

  public myForm:FormGroup = this.fb.group({
    name:["",[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern )]],
    // email:["",[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [new EmailValidator()]],
    email:["",[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username:["",[Validators.required, this.validatorService.cantBeStrider]],
    password:["",[Validators.required, Validators.minLength(6)]],
    password2:["",[Validators.required, Validators.minLength(6)]],
  },{
    validators:[
      this.validatorService.passwordMatch('password', 'password2')
    ]
  })

  ngOnInit() {
  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value)
  }

  isValid(value:string):boolean | null{
    return this.validatorService.isValidField(this.myForm, value)
  }



}
