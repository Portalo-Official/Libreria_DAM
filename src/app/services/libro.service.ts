import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';

import { environmets } from '../environments/environments.dev';
import { Libro } from '../interfaces/libreria.interface';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { ResponseLibro } from '../interfaces/response.interface';


@Injectable({
  providedIn: 'root'
})
export class LibroService implements DaoLibreria<Libro, string>{
  private BaseURL: string = environmets.baseUrl;
  private endpoint: string = environmets.endPoint.libros;
  list?: Libro[] | undefined;
  constructor(private http : HttpClient) { }

  getAll(): Observable<Libro[]>{

    // let url = 'https://localhost:44373/api/libro/libro-controller';
    let url = `${this.BaseURL}/${this.endpoint}`;
    // console.log({url});

    return this.http.get<Array<Libro>>(url)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  delete(k: string): Boolean {
    throw new Error('Method not implemented.');
  }
  /**
   * Buscar el libro por el ISBN, retornando una lista de libro conteniendo
   * el resultado de la busqueda
   * @param k ISBN del libro
   * @returns Array<Libro> del libro encontrado o Array<Libro> vacio en caso de no encontrarlo
   */
  getByID(k: string): Observable<Libro[]> {

    let params : HttpParams  = new HttpParams()
    .set('ISBN', k);

    // console.log(params.getAll('ISBN'));
    let requestLibro = JSON.stringify({ISBN : k});

    let options = {
      header : {'Content-Type':'application/json'},
      body: {ISBN: k},
      params: params
    }

    return this.http.get<ResponseLibro>(`${this.BaseURL}/${this.endpoint}/isbn/${k}`, options)
              .pipe(
                map( resp => [resp.Data]),
                catchError( () => of([]))
              );
  }
  update(t: Libro): Boolean {
    throw new Error('Method not implemented.');
  }


}
