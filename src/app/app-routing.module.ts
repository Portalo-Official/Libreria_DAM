import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'libros', loadChildren: ()=> import('./libros/libros.module').then( m=> m.LibrosModule)},
  {path:'autores', loadChildren: ()=> import('./autor/autor.module').then( m=> m.AutorModule)},
  {path:'temas', loadChildren: ()=> import('./tema/tema.module').then( m=> m.TemaModule)},
  {path:'ediciones', loadChildren: ()=> import('./edicion/edicion.module').then( m=> m.EdicionModule)},
  {path:'formatos', loadChildren: ()=> import('./formato/formato.module').then( m=> m.FormatoModule)},
  {path:'404', component: Error404Component},
  {path:'**', redirectTo:'404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
