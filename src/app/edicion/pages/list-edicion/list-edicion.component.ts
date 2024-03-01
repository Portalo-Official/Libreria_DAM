import { Component, OnInit } from '@angular/core';
import { Edicion } from '../../../interfaces/libreria.interface';
import { DaoLibreria } from '../../../interfaces/dao/dao.interface';
import { EdicionService } from '../../../services/edicion.service';

@Component({
  selector: 'app-list-edicion',
  templateUrl: './list-edicion.component.html',
  styles: ``
})
export class ListEdicionComponent implements OnInit{
  public ediciones: Array<Edicion> = [];
  constructor( private edicionService : EdicionService){}
  ngOnInit(): void {
    this.edicionService.getAll()
                      .subscribe(resp=>this.ediciones=resp);
  }
}
