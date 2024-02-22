import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule} from "primeng/panel";



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    MenubarModule,

  ],
  exports:[
    ButtonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNGModule { }
