import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`https://api.themoviedb.org/3/movie/now_playing?api_key=610c1b4839a0c0a384c5463bc55d2367&language=es-MX&page=1&region=MX`);
  }

}
