import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {
    constructor(
        private authService:AuthService,
        private rotuer:Router
    ) { }
    private checkOutStatus(): boolean |Observable<boolean>{
        return this.authService.checkAuthentication()
            .pipe(
                tap(isAuthenticated=>console.log("Autenticacion",isAuthenticated)),
                tap(isAuthenticated =>{
                    if(!isAuthenticated) this.rotuer.navigate(["./auth/login"])
                })
            )
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean>{
        // console.log("macheado")
        // return true
        // throw new Error('Method not implemented.');
        return this.checkOutStatus()
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
        // console.log("activao")
        // return true
        // throw new Error('Method not implemented.');
        return this.checkOutStatus()
    }
    
}