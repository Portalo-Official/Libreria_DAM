import { Component, OnInit } from '@angular/core';
import { Libro } from '../../../interfaces/libreria.interface';
import { LibroService } from '../../../services/libro.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{
  public libros: Array<Libro> = [];

  constructor( private libroService: LibroService){}

  ngOnInit(): void {
    this.libroService.getAll()
                    .subscribe( resp =>{
                      this.libros = resp;
                    });
  }


}
