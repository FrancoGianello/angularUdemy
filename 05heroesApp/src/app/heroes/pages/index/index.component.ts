import { Component } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private authService:AuthService){}

  get user():User | undefined{
    return this.authService.currentUser
  }

  onLogOut(){
    this.authService.logOut()
  }
}
