import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy {

  segundos:number=0
  nombre:string = "francis"
  timerSubscription!:Subscription;

  constructor(){
    console.log("yoo")
  }
  ngOnInit(): void {
    console.log("init")
    this.timerSubscription = interval(1000).subscribe(num=>{
      this.segundos=num
    })
  }
  ngOnDestroy(): void {
    console.log("HELLO ngOnDestroy")
    this.timerSubscription.unsubscribe()
  }
  ngAfterViewChecked(): void {
    console.log("HELLO ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("HELLO ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("HELLO ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("HELLO ngAfterContentInit")
  }
  ngDoCheck(): void {
    console.log("HELLO ngDoCheck")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HELLO ngDoCheck")
  }

  guardar(){
    console.log("guardao")
  }
}
