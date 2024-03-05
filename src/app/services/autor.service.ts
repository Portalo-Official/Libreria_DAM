import { Injectable } from '@angular/core';
import { Autor } from '../interfaces/libreria.interface';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environmets } from '../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})

export class AutorService implements DaoLibreria<Autor, string>{

  private baseURL: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.autor;
  list?: Autor[] | undefined;

  constructor( private http : HttpClient ) { }


  getAll(): Observable<Autor[]> {

    return this.http.get<Array<Autor>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( ()=> of([]))
                    );
  }
  getByID(k: string): Observable<Autor[]> {
    throw new Error('Method not implemented.');
  }
  delete(k: string): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.baseURL}/${this.endPoint}`, {body:{id:k}})
    .pipe(
      catchError( () => of(false))
    );
  }
  update(t: Autor): Observable<Autor | null> {
    return this.http.put<Autor>(`${this.baseURL}/${this.endPoint}`, {id:t.Id, name:t.Nombre})
    .pipe(
      catchError( () => of(null))
    );
  }
  create(t: Autor): Observable<Autor | null> {
    return this.http.post<Autor>(`${this.baseURL}/${this.endPoint}`, {id:t.Id, name:t.Nombre})
    .pipe(
      catchError( () => of(null))
    );
  }

}
