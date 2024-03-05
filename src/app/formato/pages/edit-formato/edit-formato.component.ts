import { Component } from '@angular/core';
import { Formato } from '../../../interfaces/libreria.interface';
import { FormatoService } from '../../../services/formato.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-formato',
  templateUrl: './edit-formato.component.html',
  styles: ``
})
export class EditFormatoComponent {
  private formatos: Formato[];
  public oldFormato: string ;
  public nuevoFormato?: Formato;
  public idTema: number=0;
  constructor(
    private formatoService: FormatoService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.oldFormato = '';
    this.formatos = [];
  }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 1000);
    this.formatoService.getAll().subscribe(resp => {
      if(!resp)return
      this.formatos = resp;
      // TODO -> Si nos meten un id falso, que direccione not found
      // this.oldTema= this.temas.filter( t => t.Id == this.idTema).pop()?.Tipo as string;
    });
    this.activatedRoute.params.subscribe(params => {
      this.idTema = params['id'] as number;
    });

  }

  getFormatos(): Array<string> {
    return this.formatos.map(t => t.Tipo);
  }

  updateFormato(temaUpdate: string) {

    this.formatoService.update({Id:this.idTema, Tipo: temaUpdate })
      .subscribe(resp => {
        if (resp) {
          this.nuevoFormato = resp;
          this.messageService.add({
            severity: 'success',
            summary: 'Formato '+temaUpdate ,
            detail: 'Modificado'
          });
        } else
          this.messageService.add({
            severity: 'error',
            summary: 'Error: ',
            detail: 'No se pudo modificar el formato '+this.oldFormato
          });
      });
  }

}
