import { Component, OnInit } from '@angular/core';
import { Libro, Tema } from '../../../interfaces/libreria.interface';
import { TemaService } from '../../../services/tema.service';
import { LibroService } from '../../../services/libro.service';

@Component({
  selector: 'app-list-tema',
  templateUrl: './list-tema.component.html',
  styles: ``
})
export class ListTemaComponent implements OnInit{

  public temas: Array<Tema> = [];
  public libros: Array<Libro> = [];
  constructor(
              private temaService : TemaService,
              private libroService: LibroService,
                ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.loadTemas();
    }, 1000);
    this.libroService.getAll()
      .subscribe(resp =>{
        this.libros=resp;
      });
  }
  loadTemas() {
    this.temaService.getAll()
      .subscribe(resp => this.temas = resp);
  }

  canBeDeleted(t: Tema): boolean{
    for (let i = 0; i < this.temas.length; i++) {
      if(t == this.temas[i])
        return false;
    }
    return true;
  }

  deleteTema(t : Tema){
    this.temaService.delete(t.Id!.toString())
      .subscribe(resp => {
        if(resp)
          this.loadTemas();
      });
  }

}
