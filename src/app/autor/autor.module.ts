import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { NewAutorComponent } from './pages/new-autor/new-autor.component';
import { ListAutorComponent } from './pages/list-autor/list-autor.component';
import { EditAutorComponent } from './pages/edit-autor/edit-autor.component';
import { LayoutAutorComponent } from './pages/layout-autor/layout-autor.component';
import { PrimeNGModule } from '../primeng/prime.module';


@NgModule({
  declarations: [
    NewAutorComponent,
    ListAutorComponent,
    EditAutorComponent,
    LayoutAutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    PrimeNGModule
  ],
  exports:[
    AutorRoutingModule
  ]
})
export class AutorModule { }
