import { Component, OnInit } from '@angular/core';
import { Formato } from '../../../interfaces/libreria.interface';
import { FormatoService } from '../../../services/formato.service';

@Component({
  selector: 'app-list-formato',
  templateUrl: './list-formato.component.html',
  styles: ``
})
export class ListFormatoComponent implements OnInit{
  public formatos: Array<Formato> = [];

  constructor( private formatoService : FormatoService){}

  ngOnInit(): void {
    this.formatoService.getAll()
                      .subscribe(resp => this.formatos = resp);
  }
}
