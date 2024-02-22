import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule} from "primeng/panel";
import { SkeletonModule } from 'primeng/skeleton';
import { ChipModule } from 'primeng/chip';

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
    ChipModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    SkeletonModule,
  ]
})
export class PrimeNGModule { }
