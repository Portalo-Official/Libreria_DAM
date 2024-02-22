import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponente } from './menubar/menubar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { PrimeNGModule } from '../primeng/prime.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    MenubarComponente,
    SearchboxComponent,
    HomeComponent,
    Error404Component,
    LazyImageComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    MenubarComponente,
    HomeComponent,
    Error404Component,
    LazyImageComponent,

  ]
})
export class SharedModule { }
