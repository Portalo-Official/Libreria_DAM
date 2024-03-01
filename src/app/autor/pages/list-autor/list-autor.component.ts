import { Component, OnInit } from '@angular/core';
import { Autor } from '../../../interfaces/libreria.interface';
import { AutorService } from '../../../services/autor.service';

@Component({
  selector: 'app-list-autor',
  templateUrl: './list-autor.component.html',
  styles: ``
})
export class ListAutorComponent implements OnInit{
  public autores : Array<Autor> = [];

  constructor( private autorService: AutorService){}

  ngOnInit(): void {
    this.autorService.getAll()
                    .subscribe(resp => {
                      this.autores = resp;
                    });
  }

}
