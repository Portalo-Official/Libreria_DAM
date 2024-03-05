import { Component, OnInit } from '@angular/core';
import { TemaService } from '../../../services/tema.service';
import { Tema } from '../../../interfaces/libreria.interface';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tema',
  templateUrl: './edit-tema.component.html',
  styles: ``
})
export class EditTemaComponent implements OnInit{

  private temas: Tema[];
  public nombrePicked: string;
  public nuevoTemna?: Tema;
  constructor(
              private temaService: TemaService,
              private messageService: MessageService,
              private activatedRoute : ActivatedRoute,
              ){
                this.nombrePicked='';
                this.temas=[];
              }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 1000);
    this.temaService.getAll().subscribe(resp=>this.temas=resp);
    this.activatedRoute.params.subscribe(params => {
      this
      this.nombrePicked=params['id'];
    });

  }

  getTemas(): Array<string>{
    return this.temas.map(t => t.Tipo);
  }

  updateTema(temaUpdate: any){

    this.temaService.update({Tipo:temaUpdate})
    .subscribe(resp=>{
      if(resp){
        this.nuevoTemna= resp;

      }else
      return
    });
  }

}
