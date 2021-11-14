import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For Routing between components
import { Routes, RouterModule } from "@angular/router";
// Components to Routing
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

// Array Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ) //Import RouterModule with array
  ],
  exports: [ RouterModule ] // For use Module in app.module.ts
})
export class AppRoutingModule { }
