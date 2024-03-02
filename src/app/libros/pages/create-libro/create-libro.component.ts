import { Component, OnInit } from '@angular/core';
import { Autor, Edicion, Formato, Tema } from '../../../interfaces/libreria.interface';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { TemaService } from '../../../services/tema.service';
import { LibroService } from '../../../services/libro.service';
import { AutorService } from '../../../services/autor.service';
import { EdicionService } from '../../../services/edicion.service';
import { FormatoService } from '../../../services/formato.service';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styles: ``
})
export class CreateLibroComponent implements OnInit{

  public value : string='';
  public alpha: RegExp = /[^a-zA-Z]/;
  public temas: Tema[] =[]
  public ediciones: Edicion[] =[]
  public autores: Autor[] =[]
  public formatos: Formato[] = [];
  public isbns : string[] = []
  public formGroup1: FormGroup | undefined;
  selectedTema: Tema | undefined = undefined;

  public  ISBN = new FormControl('');
  public  Titulo = new FormControl('');
  public  Precio = new FormControl('');
  public  Tema = new FormControl('');
  public  Autor = new FormControl('');
  public  Edicion = new FormControl('');
  public  Formato = new FormControl('');
  public  Cantidad = new FormControl('');
  public  URL = new FormControl<string>('');

  constructor(
              private temaService: TemaService,
              private formatoService: FormatoService,
              private edicionService: EdicionService,
              private autorService: AutorService,
              private libroService: LibroService,
              ){}

  ngOnInit() {
    // cargamos campos
    this.temaService.getAll().subscribe(resp=> this.temas=resp);
    this.edicionService.getAll().subscribe(resp=> this.ediciones=resp);
    this.formatoService.getAll().subscribe(resp=> this.formatos=resp);
    this.autorService.getAll().subscribe(resp=> this.autores=resp);
    this.libroService.getAll().subscribe(resp=>{resp.map(libro=> this.isbns.push(libro.ISBN))});

    this.formGroup1 = new FormGroup({
      selectedTema: new FormControl<Tema | null>(null)
    });
  }

}
