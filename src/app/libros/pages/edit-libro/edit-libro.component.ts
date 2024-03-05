import { Component,  OnInit } from '@angular/core';
import { Autor, Edicion, Formato, Libro, Tema } from '../../../interfaces/libreria.interface';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { TemaService } from '../../../services/tema.service';
import { LibroService } from '../../../services/libro.service';
import { AutorService } from '../../../services/autor.service';
import { EdicionService } from '../../../services/edicion.service';
import { FormatoService } from '../../../services/formato.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styles: ``
})
export class EditLibroComponent implements OnInit{
  public value : string='';
  public temas: Tema[] =[]
  public ediciones: Edicion[] =[]
  public autores: Autor[] =[]
  public formatos: Formato[] = [];
  public isbns : string[] = [];
  public libro?: Libro;
  public libroForm! : FormGroup;
  public contBusqueda:number=0;


  constructor(
              private temaService: TemaService,
              private formatoService: FormatoService,
              private edicionService: EdicionService,
              private autorService: AutorService,
              private libroService: LibroService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              ){}

  ngOnInit() {
    // cargamos campos
    // this.temaService.getAll().subscribe(resp=> this.temas=resp);
    // this.edicionService.getAll().subscribe(resp=> this.ediciones=resp);
    // this.formatoService.getAll().subscribe(resp=> this.formatos=resp);
    // this.autorService.getAll().subscribe(resp=> this.autores=resp);


    this.libroService.getAll().subscribe(resp=>{resp.map(libro=> this.isbns.push(libro.ISBN))});


    this.libroForm = this.fb.group({

      ISBN: ['',
            [
              Validators.required,
              Validators.minLength(13),
            ],
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
                Validators.pattern('[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ.]+[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\\s.]+'),
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

    this.activatedRoute.params
        .pipe(
          switchMap( params => this.libroService.getByID(params['isbn']))
        )
        .subscribe( resp =>{
          this.libro= resp[0];
          this.setValuesForm();
        }
        );

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
    // });


  }
   /**
   * Establece los valores del DOM en el formulario
   * @returns
   */
  setValuesForm(): void{
    this.libroForm.setValue({
      ISBN: this.libro?.ISBN || '',
      Titulo: this.libro?.Titulo || '',
      Autor: this.libro?.Autor || '',
      Precio: this.libro?.Precio || '',
      Tema: '',
      Formato: '',
      Edicion: '',
      Cantidad:'',
    });
    // this.libroForm.reset(this.libro);
    this.libroForm.get('ISBN')!.disable();
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

      this.libroService.update({...this.updateLibro()})
                      .subscribe(resp=>{
                        if(resp)
                          this.messageService.add({
                                                  severity:'success',
                                                  summary:'Libro '+resp.ISBN,
                                                  detail:'Modificado'
                                                });
                        else
                          this.messageService.add({
                            severity:'error',
                            summary:'Error: ',
                            detail:'No se pudo modificar el libro'
                          });
                        // this.libroForm.reset({ Cantidad: 0});
                      });
    }

  }

  updateLibro(): Libro{
    return {
      ISBN : this.libro!.ISBN,
      Titulo: this.libroForm.get('Titulo')?.value,
      Precio: this.libroForm.get('Precio')?.value,
      Tema: (this.libroForm.get('Tema')?.value as Tema).Tipo ,
      Autor: this.libroForm.get('Autor')?.value,
      Edicion: (this.libroForm.get('Edicion')?.value as Edicion).Tipo,
      Formato: (this.libroForm.get('Formato')?.value as Formato).Tipo,
      Cantidad: this.libro!.Cantidad,
      URL: this.libro!.URL || '',
    }
  }

  hasLoeaded(): boolean{
    setTimeout(()=>{

    }, 2000)
    if(!this.libro && this.contBusqueda<4)
      setTimeout(() => {
        this.activatedRoute.params
        .pipe(
          switchMap( params => this.libroService.getByID(params['isbn']))
        )
        .subscribe( resp =>{
          console.log(resp);
          this.libro= resp[0];

          this.setValuesForm();
        }
        );
      }, 5000);
      this.contBusqueda++;
    return this.libro!=null;
  }
}
