import { Component, OnInit } from '@angular/core';
import { Autor, Edicion, Formato, Libro, Tema } from '../../../interfaces/libreria.interface';
import { Form, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { TemaService } from '../../../services/tema.service';
import { LibroService } from '../../../services/libro.service';
import { AutorService } from '../../../services/autor.service';
import { EdicionService } from '../../../services/edicion.service';
import { FormatoService } from '../../../services/formato.service';
import { MessageService } from 'primeng/api';

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
  public isbns : string[] = [];

  // Formulario reactivo;
  public libroForm! : FormGroup;

  constructor(
              private temaService: TemaService,
              private formatoService: FormatoService,
              private edicionService: EdicionService,
              private autorService: AutorService,
              private libroService: LibroService,
              private fb: FormBuilder,
              private messageService: MessageService
              ){}

  ngOnInit() {
    // cargamos campos
    // this.temaService.getAll().subscribe(resp=> this.temas=resp);
    // this.edicionService.getAll().subscribe(resp=> this.ediciones=resp);
    // this.formatoService.getAll().subscribe(resp=> this.formatos=resp);
    // this.autorService.getAll().subscribe(resp=> this.autores=resp);
    this.libroService.getAll().subscribe(resp=>{resp.map(libro=> this.isbns.push(libro.ISBN))});


    this.libroForm = this.fb.group({
      ISBN : ['' ,
              [
                Validators.required,
                Validators.minLength(13),
              ]
            ],
      Titulo: ['',
                [
                  Validators.required,
                  Validators.minLength(1),
                ]
              ],
      Precio: [null,
                [
                  Validators.required,
                  Validators.min(1),

                ]
              ],
      Tema: [null,
              [
                Validators.required,

              ]
            ],
      Autor: [null,
              [
                Validators.required,
                Validators.minLength(1),
                Validators.pattern('[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\\s]+'),
                // Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$'),
              ]
            ],
      Edicion: [null,
                [
                  Validators.required,
                ]
              ],
      Formato: [null,
                [
                  Validators.required,
                ]
                ],
      Cantidad: [0],
    });

    // this.libroForm = new FormGroup({
    //   ISBN : new FormControl<string>('', {nonNullable:true}),
    //   Titulo : new FormControl<string>('', {nonNullable:true}),
    //   Precio : new FormControl(0, {nonNullable:true}),
    //   Tema : new FormControl<Tema>({Id:2, Tipo:'inventada'}, {nonNullable:true}),
    //   Autor : new FormControl<string>('',{nonNullable:true}),
    //   Edicion : new FormControl<Edicion>({Id:2, Tipo:'inventada'}, {nonNullable:true}),
    //   Formato : new FormControl<Formato>({Id:2, Tipo:'inventada'}, {nonNullable:true}),
    //   Cantidad : new FormControl<number>(0),
    //   // URL : new FormControl<string>(''),
    // })
  }

  loadTemas():void{
    if(this.temas.length == 0)
      this.temaService.getAll().subscribe(resp=> this.temas=resp);
  }
  loadEdiciones():void{
    if(this.ediciones.length == 0)
      this.edicionService.getAll().subscribe(resp=> this.ediciones=resp);
  }
  loadFormatos():void{
    if(this.formatos.length == 0)
      this.formatoService.getAll().subscribe(resp=> this.formatos=resp);
  }

  onSubmit():void{

    if(!this.libroForm.invalid){
      console.log(this.createLibro());

      this.libroService.create({...this.createLibro()})
                      .subscribe(resp=>{
                        if(resp)
                          this.messageService.add({
                                                  severity:'success',
                                                  summary:'Libro '+resp.ISBN,
                                                  detail:'Creado correctamente'
                                                });
                        else
                          this.messageService.add({
                            severity:'error',
                            summary:'Error: ',
                            detail:'No se pudo crear el libro'
                          });
                        this.libroForm.reset({ Cantidad: 0});
                      });
    }

  }

  createLibro(): Libro{
    return {
      ISBN : this.libroForm.get('ISBN')?.value,
      Titulo: this.libroForm.get('Titulo')?.value,
      Precio: this.libroForm.get('Precio')?.value,
      Tema: (this.libroForm.get('Tema')?.value as Tema).Tipo ,
      Autor: this.libroForm.get('Autor')?.value,
      Edicion: (this.libroForm.get('Edicion')?.value as Edicion).Tipo,
      Formato: (this.libroForm.get('Formato')?.value as Formato).Tipo,
      Cantidad: 0,
      URL: '',
    }
  }
}
