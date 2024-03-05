import { Component } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Tema } from '../../../interfaces/libreria.interface';

@Component({
  selector: 'app-new-tema',
  templateUrl: './new-tema.component.html',
  styles: ``
})
export class NewTemaComponent {

  private temas: Tema[];
  public oldTema: string ;
  public nuevoTemna?: Tema;
  public idTema: number=0;
  constructor(
    private temaService: TemaService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.oldTema = '';
    this.temas = [];
  }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 1000);
    this.temaService.getAll().subscribe(resp => {
      if(!resp)return
      this.temas = resp;
      // TODO -> Si nos meten un id falso, que direccione not found
      // this.oldTema= this.temas.filter( t => t.Id == this.idTema).pop()?.Tipo as string;
    });
    this.activatedRoute.params.subscribe(params => {
      this.idTema = params['id'] as number;
    });

  }

  getTemas(): Array<string> {
    return this.temas.map(t => t.Tipo);
  }

  createTema(temaCreate: any) {

    this.temaService.create({Id:this.idTema, Tipo: temaCreate })
      .subscribe(resp => {
        if (resp) {
          this.nuevoTemna = resp;
          this.messageService.add({
            severity: 'success',
            summary: 'Tema ' + resp.Tipo,
            detail: 'Modificado'
          });
        } else
          this.messageService.add({
            severity: 'error',
            summary: 'Error: ',
            detail: 'No se pudo modificar el tema '+this.oldTema
          });
      });
  }
}
