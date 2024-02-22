import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponente } from './menubar/menubar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PrimeNGModule } from '../primeng/prime.module';



@NgModule({
  declarations: [
    MenubarComponente,
    SearchboxComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    MenubarComponente,
  ]
})
export class SharedModule { }
