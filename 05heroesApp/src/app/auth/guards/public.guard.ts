import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanActivate, CanMatch {
    constructor(
        private authService:AuthService,
        private rotuer:Router
    ) { }

    private checkLogin():boolean | Observable<boolean>{
        return this.authService.checkAuthentication()
            .pipe(
                tap(isLogged=> {
                    if(isLogged){
                        this.rotuer.navigate(["/heroes"])
                    }
                }),
                map(isLogged=>!isLogged)
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkLogin()
    }
    canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkLogin()
    }
    
        

}