import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatoRoutingModule } from './formato-routing.module';
import { NewFormatoComponent } from './pages/new-formato/new-formato.component';
import { ListFormatoComponent } from './pages/list-formato/list-formato.component';
import { EditFormatoComponent } from './pages/edit-formato/edit-formato.component';
import { LayoutFormatoComponent } from './pages/layout-formato/layout-formato.component';
import { PrimeNGModule } from '../primeng/prime.module';


@NgModule({
  declarations: [
    NewFormatoComponent,
    ListFormatoComponent,
    EditFormatoComponent,
    LayoutFormatoComponent
  ],
  imports: [
    CommonModule,
    FormatoRoutingModule,
    PrimeNGModule
  ]
})
export class FormatoModule { }
