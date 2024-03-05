import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LibroPagesComponent } from './pages/libro-pages/libro-pages.component';
import { LibroRoutingModule } from './libros-routing.module';
import { PrimeNGModule } from '../primeng/prime.module';
import { CardLibroComponent } from './components/card-libro/card-libro.component';
import { SharedModule } from '../shared/shared.module';
import { EditLibroComponent } from './pages/edit-libro/edit-libro.component';
import { CreateLibroComponent } from './pages/create-libro/create-libro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListPageComponent,
    LayoutPagesComponent,
    LibroPagesComponent,
    CardLibroComponent,
    EditLibroComponent,
    CreateLibroComponent,
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    PrimeNGModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class LibrosModule { }
