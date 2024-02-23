import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../interfaces/libreria.interface';
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

  // constructor(
  //             private activatedRoute : ActivatedRoute,
  //             private router : Router,
  //             private libroService: LibroService
  //             ){}

  ngOnInit(): void {
    // Paso 1: Coger la id de la querystring
    // this.activatedRoute.params
    //     .pipe(
    //       // switchMap( params => this.libroService.getByID())
    //     )

  }



}
