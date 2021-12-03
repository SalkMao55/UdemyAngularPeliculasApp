import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  // Propertie to save Search Movies "smovies".
  smovies: Movie[] = [];
  // Propertie to save value used to search movies
  text_busqueda: string = "";

  constructor( private activatedRoute: ActivatedRoute, 
               private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    // This Lines Let us to find the movies that we searched in the NavBar
    this.activatedRoute.params.subscribe( params => { // Work with Params Value
      this.text_busqueda = params.texto;
      // Service Call
      this.peliculasService.buscarPeliculas( params.texto ).subscribe(
        movies => {
          console.log(movies);
          this.smovies = movies;
        }
      );
    } );
  }

}
