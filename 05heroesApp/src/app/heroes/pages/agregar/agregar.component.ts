import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap, filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  constructor(
    private heroesService:HeroesService,
    private activatedRouter:ActivatedRoute,
    private router:Router,
    private snackBar:MatSnackBar,
    private dialog:MatDialog
  ){}

  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', {nonNullable:true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),        
    first_appearance: new FormControl(''), 
    characters:       new FormControl(''), 
    alt_img:          new FormControl(''),      

  });

  get currentHero():Heroe{
    const hero = this.heroForm.value as Heroe
    return hero
  }

  public publishers=[
    {id: 'DC Comics', desc:'DC - Comics'},
    {id: 'Marvel Comics', desc:'Marvel - Comics'},
  ]

  ngOnInit(): void {
      
    if(!this.router.url.includes('edit')) return

    this.activatedRouter.params
      .pipe(
        switchMap(
          ({id})=>this.heroesService.getHero(id)
        )
      ).subscribe(
        hero=>{
          if(!hero) return this.router.navigateByUrl("/")

          this.heroForm.reset(hero)
          return
        }
      )

  }

  onSubmit():void{
    if(!this.heroForm.valid) return

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero=>{
           this.showSnackBar(`${hero.superhero} updated`)
        })
    }
    if(this.currentHero.id){
      this.heroesService.addHero(this.currentHero)
        .subscribe(hero=>{
          this.router.navigate(['heroes/agregar/edit', hero.id])
          this.showSnackBar(`${hero.superhero} created`)           
        })
    }

  }

  onDeleteHero(){
    if(!this.currentHero.id) throw Error("Hero id is required")

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result:boolean) => result),
        switchMap(()=>this.heroesService.deleteHero(this.currentHero)),
        filter((wasDeleted:boolean)=>wasDeleted)
      )
      .subscribe(result=>{
        this.router.navigate(["/heroes"])
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   if(!result) return
    //   this.heroesService.deleteHero(this.currentHero).
    //     subscribe(deleted=>{
    //       if(deleted)
    //       this.router.navigate(["/heroes"])
    //   })
    // });
  }

  showSnackBar(message:string):void{
    this.snackBar.open(message, 'done',{
      duration:2000
    })
  }

}
