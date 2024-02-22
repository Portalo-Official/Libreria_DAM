import { Component, Input } from '@angular/core';
import { Libro } from '../../../interfaces/libreria.interface';

@Component({
  selector: 'libros-card-libro',
  templateUrl: './card-libro.component.html',
  styles: ``
})
export class CardLibroComponent {
  @Input()
  public libro!: Libro;

}
