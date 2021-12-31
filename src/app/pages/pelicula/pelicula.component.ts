import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { StarRatingComponent } from 'ng-starrating';
// This gives all the User Location Information
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  //Propertie use to show Movie information on Template "pelicula.component.html"
  public declare pelicula: MovieResponse | null;
  // We use "declare" to indicate the next information to compiler: "There is a property 
  //          called name of type string. I shouldn't have to prove to you that name actually exists, 
  //          but I want to use it anyway."
  //Source: https://stackoverflow.com/questions/67351411/what-s-the-difference-between-definite-assignment-assertion-and-ambient-declarat
  
  //Propertie use to show Cast Movie information on Template "pelicula.component.html"
  public declare cast: Cast[];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {
    const  {id}  = this.activatedRoute.snapshot.params;
    this.peliculasService.getPeliculaDetalle(id).subscribe( movie => {
      //console.log(movie);
      // Get Movie information from "pelicula.service.ts"
      if (!movie) {
        this.router.navigate(['/home']);
      }
      this.pelicula = movie;
    });
    // Get Cast Movie information from "pelicula.service.ts"
    this.peliculasService.getCast(id).subscribe( cast => {
      console.log(cast);
      this.cast = cast;
    });

  }
  
  // To assing value of starts on movie, only show an Alert with the value indicated
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  
  // Come back to home page.
  onRegresar(){
    this.location.back();
  }
}
