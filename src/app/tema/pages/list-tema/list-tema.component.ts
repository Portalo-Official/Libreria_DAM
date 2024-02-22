import { Component, OnInit } from '@angular/core';
import { Tema } from '../../../interfaces/libreria.interface';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-list-tema',
  templateUrl: './list-tema.component.html',
  styles: ``
})
export class ListTemaComponent implements OnInit{

  public temas: Array<Tema> = [];
  constructor( private temaService : TemaService){}

  ngOnInit(): void {
    this.temaService.getAll()
                .subscribe(resp => this.temas = resp);
  }

}
