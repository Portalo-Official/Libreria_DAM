import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemaRoutingModule } from './tema-routing.module';
import { NewTemaComponent } from './pages/new-tema/new-tema.component';
import { EditTemaComponent } from './pages/edit-tema/edit-tema.component';
import { ListTemaComponent } from './pages/list-tema/list-tema.component';
import { LayoutTemaComponent } from './pages/layout-tema/layout-tema.component';
import { PrimeNGModule } from '../primeng/prime.module';


@NgModule({
  declarations: [
    NewTemaComponent,
    EditTemaComponent,
    ListTemaComponent,
    LayoutTemaComponent
  ],
  imports: [
    CommonModule,
    TemaRoutingModule,
    PrimeNGModule
  ]
})
export class TemaModule { }
