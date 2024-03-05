import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { Formato } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { environmets } from '../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class FormatoService implements DaoLibreria<Formato, string>{

  private baseURL  : string = environmets.baseUrl;
  private endPoint : string = environmets.endPoint.formato;
  constructor( private http: HttpClient) { }
  list?: Formato[] | undefined;


  getAll() : Observable<Array<Formato>>{
    return this.http.get<Array<Formato>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }
  delete(k: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.baseURL}/${this.endPoint}`, {body:{id:k}})
    .pipe(
      catchError( () => of(false))
    );
  }
  getByID(k: string): Observable<Formato[]> {
    throw new Error('Method not implemented.');
  }
  update(t: Formato): Observable<Formato | null> {
    return this.http.put<Formato>(`${this.baseURL}/${this.endPoint}`, {id:t.Id, name:t.Tipo})
    .pipe(
      catchError( () => of(null))
    );
  }
  create(t: Formato): Observable<Formato | null> {
    return this.http.post<Formato>(`${this.baseURL}/${this.endPoint}`, {id:t.Id, name:t.Tipo})
    .pipe(
      catchError( () => of(null))
    );
  }

}
