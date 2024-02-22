import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosByAutorComponent } from './pages/libros-by-autor/libros-by-autor.component';
import { LibrosByTituloComponent } from './pages/libros-by-titulo/libros-by-titulo.component';
import { LibrosByRangoPrecioComponent } from './pages/libros-by-rango-precio/libros-by-rango-precio.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { LibroRoutingModule } from './libros-routing.module';
import { PrimeNGModule } from '../primeng/prime.module';
import { CardLibroComponent } from './components/card-libro/card-libro.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LibrosByAutorComponent,
    LibrosByTituloComponent,
    LibrosByRangoPrecioComponent,
    ListPageComponent,
    LayoutPagesComponent,
    LibroPagesComponent,
    CardLibroComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    PrimeNGModule,
    SharedModule
  ]
})
export class LibrosModule { }
