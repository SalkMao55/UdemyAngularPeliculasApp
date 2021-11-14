import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RatingModule } from 'ng-starrating';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ],
  exports: [ // Exports to use outside this module
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ]
})
export class ComponentsModule { }
