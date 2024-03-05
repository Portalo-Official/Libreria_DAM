import { Component } from '@angular/core';
import { Edicion } from '../../../interfaces/libreria.interface';
import { EdicionService } from '../../../services/edicion.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-edicion',
  templateUrl: './edit-edicion.component.html',
  styles: ``
})
export class EditEdicionComponent {
  private ediciones: Edicion[];
  public oldEdicion: string ;
  public nuevaEdicion?: Edicion;
  public idTema: number=0;
  constructor(
    private edicionService: EdicionService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.oldEdicion = '';
    this.ediciones = [];
  }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 1000);
    this.edicionService.getAll().subscribe(resp => {
      if(!resp)return
      this.ediciones = resp;
      // TODO -> Si nos meten un id falso, que direccione not found
      // this.oldTema= this.temas.filter( t => t.Id == this.idTema).pop()?.Tipo as string;
    });
    this.activatedRoute.params.subscribe(params => {
      this.idTema = params['id'] as number;
    });

  }

  getAutores(): Array<string> {
    return this.ediciones.map(t => t.Tipo);
  }

  updateAutor(autorUpdate: string) {

    this.edicionService.update({Id:this.idTema, Tipo: autorUpdate })
      .subscribe(resp => {
        if (resp) {
          this.nuevaEdicion = resp;
          this.messageService.add({
            severity: 'success',
            summary: 'Autor '+ autorUpdate ,
            detail: 'Modificado'
          });
        } else
          this.messageService.add({
            severity: 'error',
            summary: 'Error: ',
            detail: 'No se pudo modificar el autor '+this.oldEdicion
          });
      });
  }
}
