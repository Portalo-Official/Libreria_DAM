import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../interfaces/libreria.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../services/libro.service';
import { switchMap } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from 'express';
// import { LibroService } from '../../../services/libro.service';

@Component({
  selector: 'app-libro-pages',
  templateUrl: './libro-pages.component.html',
  styles: ``
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
          // console.log("llego a libro "+ resp[0].Autor);
          this.libro= resp[0]
        }
        )

  }



}
