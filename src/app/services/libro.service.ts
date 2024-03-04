import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';

import { environmets } from '../environments/environments.dev';
import { Libro, Formato } from '../interfaces/libreria.interface';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { ResponseLibro } from '../interfaces/response.interface';
import { log } from 'console';


@Injectable({
  providedIn: 'root'
})
export class LibroService implements DaoLibreria<Libro, string>{
  private BaseURL: string = environmets.baseUrl;
  private endpoint: string = environmets.endPoint.libros;
  list?: Libro[] | undefined;
  constructor(private http : HttpClient) { }


  getAll(): Observable<Libro[]>{
    let url = `${this.BaseURL}/${this.endpoint}`;
    return this.http.get<Array<Libro>>(url)
                    .pipe(
                      catchError( () => of([]))
                    );
  }



  /**
   * Buscar el libro por el ISBN, retornando una lista de libro conteniendo
   * el resultado de la busqueda
   * @param k ISBN del libro
   * @returns Array<Libro> del libro encontrado o Array<Libro> vacio en caso de no encontrarlo
   */
  getByID(k: string): Observable<Libro[]> {

    return this.http.get<ResponseLibro>(`${this.BaseURL}/${this.endpoint}/isbn/${k}`)
    .pipe(
      map( resp => [resp.Data as Libro]),
      catchError( () => of([]))
      );
    }

    delete(k: string): Observable<Boolean> {
      let options = {
        header : new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}),
        body : {
                ISBN: k
                }
      };
      return this.http.delete<ResponseLibro>(`${this.BaseURL}/${this.endpoint}`, options)
                        .pipe(
                          map(resp => resp.Data as Boolean),
                          catchError( () => of(false))
                        );
    }
    update(t: Libro): Observable<Libro | null> {
      let options = {
        header : new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}),
        body : {
                ISBN: t.ISBN,
                Precio: t.Precio,
                Tema: t.Tema,
                Autor: t.Autor,
                Edicion: t.Edicion,
                Formato: t.Formato,
                cantidad: t.Cantidad
              }
      };

      let url : string = `${this.BaseURL}/${this.endpoint}`;
      return this.http.put<ResponseLibro>(url, t)
                      .pipe(
                        map( resp => resp.Data as Libro | null),
                        catchError(() => of(null))
                      );

    }
    create(t: Libro): Observable<Libro | null> {
      let options = {
        header : new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}),
        body : {
          ISBN: t.ISBN,
          Precio: t.Precio,
          Tema: t.Tema,
          Autor: t.Autor,
          Edicion: t.Edicion,
          Formato: t.Formato,
          cantidad: t.Cantidad
        }
      };
      let url : string = `${this.BaseURL}/${this.endpoint}`;
      return this.http.post<ResponseLibro>(url, t)
                      .pipe(
                        map( resp => {
                                      console.log(resp.Error);
                                      return resp.Data as Libro | null}),
                        catchError(() => of(null))
                      );
    }

    // console.log(params.getAll('ISBN'));
    // let requestLibro = JSON.stringify({ISBN : k});

    // let options = {
    //   header : {'Content-Type':'application/json'},
    //   body: {ISBN: k},
    //   params: params
    // }


}
