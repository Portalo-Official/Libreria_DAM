import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { environmets } from '../environments/environments.dev';
import { Libro } from '../interfaces/libreria.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private BaseURL: string = environmets.baseUrl;
  private endpoint: string = environmets.endPoint.libros;

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Array<Libro>>{

    let url = `${this.BaseURL}/${this.endpoint}`;

    return this.http.get<Array<Libro>>(url)
                    .pipe(
                      catchError( () => of([]))
                    );
  }


}
