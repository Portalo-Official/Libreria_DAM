import { Component } from '@angular/core';
import { Autor } from '../../../interfaces/libreria.interface';
import { AutorService } from '../../../services/autor.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-autor',
  templateUrl: './new-autor.component.html',
  styles: ``
})
export class NewAutorComponent {
  private autores: Autor[];
  public oldAutor: string ;
  public nuevoFormato?: Autor;
  public idTema: number=0;
  constructor(
    private autorService: AutorService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.oldAutor = '';
    this.autores = [];
  }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 1000);
    this.autorService.getAll().subscribe(resp => {
      if(!resp)return
      this.autores = resp;
      // TODO -> Si nos meten un id falso, que direccione not found
      // this.oldTema= this.temas.filter( t => t.Id == this.idTema).pop()?.Tipo as string;
    });
    this.activatedRoute.params.subscribe(params => {
      this.idTema = params['id'] as number;
    });

  }

  getAutores(): Array<string> {
    return this.autores.map(t => t.Nombre);
  }

  createAutor(autorUpdate: string) {

    this.autorService.create({Id:this.idTema, Nombre: autorUpdate })
      .subscribe(resp => {
        if (resp) {
          this.nuevoFormato = resp;
          this.messageService.add({
            severity: 'success',
            summary: 'Autor '+ autorUpdate ,
            detail: 'Creado'
          });
        } else
          this.messageService.add({
            severity: 'error',
            summary: 'Error: ',
            detail: 'No se pudo crear el autor '+this.oldAutor
          });
      });
  }
}
