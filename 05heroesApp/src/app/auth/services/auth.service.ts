import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap, of, map, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
    
    private baseUrl = environment.baseUrl
    private user?:User |undefined

    constructor(
        private http: HttpClient,
        private router:Router
    ) { }

    get currentUser():User | undefined{
        return (this.user)? structuredClone(this.user ): undefined
    }

    login(email:string, pass:string):Observable<User>{
       
       return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap(user=>{this.user=user}),
                tap( user=>localStorage.setItem("token",user.id.toString()))
            )
    }

    checkAuthentication():Observable<boolean> {
        if(!localStorage.getItem("token")) return of(false)

        const token = localStorage.getItem("token")

        return this.http.get<User>(`${this.baseUrl}/users/1`).
            pipe(
                tap(user=>this.user=user),
                map(user=>!!user),
                catchError(err=>of(false))
            )
    }

    logOut():void{
        this.user=undefined
        localStorage.clear()
        this.router.navigate(["/auth/login"])
    }
}