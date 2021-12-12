import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  // Properties
  private baseUrl: string = 'https://api.themoviedb.org/3'; // Base URL API
  private carteleraPage = 1; // To specify catelera page
  public cargando: boolean = false;// Propertie to know if the API info was use.

  constructor( private http: HttpClient) { }

  // Params structure to add in link of http service
  // All properties have to be strings.
  public get params() {
    return {
      api_key: '610c1b4839a0c0a384c5463bc55d2367',
      language: 'es-MX',
      page: this.carteleraPage.toString(),
      region: 'MX'
    }
  }

  // Method to reset "carteleraPage"
  resetCargeleraPage(){
    this.carteleraPage = 1;
  }
  

  getCartelera():Observable<Movie[]>{
    if( this.cargando ){ return of([]); } // If is charging, return an Observable without value.
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp)=> resp.results ),
      tap( ()=> {
        this.carteleraPage += 1;
        this.cargando=false;
      } )
    );
  }

  //Method to get films with the word writed on NavBar Input
  buscarPeliculas(texto:string):Observable<Movie[]>{
    // We don't need the Page Number, we will change its value to 1
    const params = {...this.params, page:'1', query:texto};
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
      params // Rule of ecmascript 6, we can use the same variable like this propertie.
    }).pipe(
      map( resp => resp.results ) // This return => (property) CarteleraResponse.results: Movie[]
    );
  }
  
  // Method to get information realted to one Movie with the ID indicated.
  getPeliculaDetalle( id: string ){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    });
  }

}
