import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService:AuthService,
    private router:Router
    ){}

  onLogin():void{
    this.authService.login("wekfe", "welkmwekf")
      .subscribe(user=>{
        this.router.navigate(["/heroes/listado"])
      })
  }
}
