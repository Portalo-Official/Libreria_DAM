import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { ListEdicionComponent } from './pages/list-edicion/list-edicion.component';
import { EditEdicionComponent } from './pages/edit-edicion/edit-edicion.component';
import { NewEdicionComponent } from './pages/new-edicion/new-edicion.component';
import { LayoutEdicionComponent } from './pages/layout-edicion/layout-edicion.component';
import { PrimeNGModule } from '../primeng/prime.module';


@NgModule({
  declarations: [
    ListEdicionComponent,
    EditEdicionComponent,
    NewEdicionComponent,
    LayoutEdicionComponent
  ],
  imports: [
    CommonModule,
    EdicionRoutingModule,
    PrimeNGModule
  ],
})
export class EdicionModule { }
