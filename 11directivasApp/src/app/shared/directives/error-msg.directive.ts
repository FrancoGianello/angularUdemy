import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color:string="red"
  private _mensaje:string="Este campo necesita valor"
  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor:string){
    this._color=valor
    this.setColor()
    console.log("holaS")
  }
  @Input() set mensaje(valor:string){
    this._mensaje=valor
    this.setMensaje()
    this.setEstilo()
  }
  @Input() set valido(valor:boolean){
    this.htmlElement.nativeElement.style.display = (!valor)? 'block':'none'
  }
  constructor (private el:ElementRef<HTMLElement>) {
    this.htmlElement=el
   }

  ngOnInit(): void {
    console.log("sip")
     this.setMensaje()
     this.setColor()
   }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes["mensaje"]){
    //   this.htmlElement.nativeElement.innerText=changes["mensaje"].currentValue
    // }
    // if(changes["color"]){
    //   this.htmlElement.nativeElement.style.color =changes["color"].currentValue
    // }
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add("form-text")
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText=this._mensaje
  }
  setColor():void{
    this.htmlElement.nativeElement.style.color =this._color
  }

}
