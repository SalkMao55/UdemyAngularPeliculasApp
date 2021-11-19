import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Array for movies on infinity Scroll
  public movies : Movie[] = [];
  // Array for save movies and use them inside the slideshow
  public moviesSlideshow: Movie[] = [];

  // Interface for HostListener and implement the infinity scroll
  @HostListener('window:scroll',['$event'])
  onScroll(){
    // With the interface every time we do scroll on the window, we activate this function
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight ); // Get Max Scroll value
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + (max/3); // Get current Scroll value
    
    if ( pos >= max) {
      // TODO: llamar el servicio
      this.peliculasService.getCartelera().subscribe( resp => {
        this.movies.push(...resp.results); // Add every result to Array of movies
      } );
    }
  }

  constructor( private peliculasService: PeliculasService ) { 
   }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(resp => {
      // console.log(resp.results);
      this.movies = resp.results;
      this.moviesSlideshow = resp.results;
    });
  }

}
