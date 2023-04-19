import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

    // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    //     const email = control.value

    //     console.log(email)

    //     return of({
    //         emailTaken:true
    //     }).pipe(
    //         delay(3000)
    //     )

    // }
    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
        const email = control.value

        const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) =>{

            if(email == "francis@gmail.com")
                subscriber.next({emailTaken:true})
            else
                subscriber.next(null)
            
            subscriber.complete()
        }).pipe(
            delay(2000)
        )
        return httpCallObservable
    }


    
}