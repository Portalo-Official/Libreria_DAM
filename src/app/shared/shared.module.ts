import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';



@NgModule({
  declarations: [
    MenubarComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
