import { Component } from '@angular/core';
import { Formato } from '../../../interfaces/libreria.interface';
import { FormatoService } from '../../../services/formato.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-formato',
  templateUrl: './new-formato.component.html',
  styles: ``
})
export class NewFormatoComponent {
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


  }

  getFormatos(): Array<string> {
    return this.formatos.map(t => t.Tipo);
  }

  createFormato(temaUpdate: string) {

    this.formatoService.create({ Tipo: temaUpdate })
      .subscribe(resp => {
        if (resp) {
          this.nuevoFormato = resp;
          this.messageService.add({
            severity: 'success',
            summary: 'Formato '+temaUpdate ,
            detail: 'Creado'
          });
        } else
          this.messageService.add({
            severity: 'error',
            summary: 'Error: ',
            detail: 'No se pudo crear el formato '+this.oldFormato
          });
      });
  }
}
