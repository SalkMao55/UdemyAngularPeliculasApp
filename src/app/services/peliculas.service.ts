import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  // Properties
  private baseUrl: string = 'https://api.themoviedb.org/3'; // Base URL API
  private carteleraPage = 1; // To specify catelera page

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
  

  getCartelera():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      tap( ()=> {
        this.carteleraPage += 1;
      } )
    );
  }

}
