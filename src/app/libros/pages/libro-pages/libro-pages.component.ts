import { Libro } from './../../../interfaces/libreria.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../services/libro.service';
import { switchMap } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from 'express';
// import { LibroService } from '../../../services/libro.service';

@Component({
  selector: 'app-libro-pages',
  templateUrl: './libro-pages.component.html',
  styles: `
            .img-card-libro{
              max-height: 70vh;
            }
            .papi{

            }
          `
})
export class LibroPagesComponent implements OnInit{
  @Input()
  public libro!: Libro;

  constructor(
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private libroService: LibroService
              ){}

  ngOnInit(): void {
    // Paso 1: Coger la id de la querystring
    this.activatedRoute.params
        .pipe(
          // Le damos la id ya al service
          switchMap( params => this.libroService.getByID(params['isbn']))
        )
        .subscribe( resp =>{
          // console.log(resp[0].Tema);

          this.libro= resp[0];

          // console.log(this.libro.Tema.Tipo);
        }
        )

  }

  public borrarLibro(){
    this.libroService.delete(this.libro.ISBN).subscribe(resp=>{

      // TODO que una ventana o mensajeme diga que el libro se borro
      console.log(resp);

    }
    );
  }



}
