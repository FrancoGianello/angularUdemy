import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  public myForm:FormGroup = this.fb.group([
    
  ])

  ngOnInit() {
  }

}
