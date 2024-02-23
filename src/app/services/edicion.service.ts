import { Injectable } from '@angular/core';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { Edicion } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { environmets } from '../environments/environments.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdicionService implements DaoLibreria<Edicion, string> {

  private baseURL  : string = environmets.baseUrl;
  private endPoint : string = environmets.endPoint.edicion;
  list?: Edicion[] | undefined;

  constructor( private http : HttpClient) { }

  getAll(): Observable<Edicion[]> {
    return this.http.get<Array<Edicion>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }
  delete(k: string): Boolean {
    throw new Error('Method not implemented.');
  }
  getByID(k: string): Observable<Edicion[]> {
    throw new Error('Method not implemented.');
  }
  update(t: Edicion): Boolean {
    throw new Error('Method not implemented.');
  }
}
