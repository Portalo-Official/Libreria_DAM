import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/libreria.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  public libros: Array<Libro> = [];

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
