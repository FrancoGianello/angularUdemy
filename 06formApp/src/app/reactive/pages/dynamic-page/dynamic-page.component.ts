import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  public myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3 )]],
    favouriteGames:this.fb.array([
      ['Metal Gear', Validators.required],
      ['Messi', Validators.required],
    ])
  })

  public newFavourite:FormControl = new FormControl()

  ngOnInit() {
  }

  get favouriteGames(){
    return this.myForm.get('favouriteGames') as FormArray
  }

  onDeleteFavourite(index:number):void{
    this.favouriteGames.removeAt(index)
  }

  addFavourite():void{
    if(this.newFavourite.invalid) return

    const newGame = this.newFavourite.value
    // this.favouriteGames.push( new FormControl(newGame, Validators.required))

    this.favouriteGames.push(
        this.fb.control(newGame, Validators.required)
      )

    this.newFavourite.reset()
    
  }

  onSubmit():void{

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
    

    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([])
    this.myForm.reset()
  }

}
