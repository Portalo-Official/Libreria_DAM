import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { environmets } from '../environments/environments.dev';
import { DaoLibreria } from '../interfaces/dao/dao.interface';

@Injectable({
  providedIn: 'root'
})
export class TemaService implements DaoLibreria<Tema, string>{

  private baseURL: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.temas;
  list?: Tema[] | undefined;
  constructor( private http : HttpClient) { }



  public getAll(): Observable<Tema[]>{
    return this.http.get<Array<Tema>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  getByID(k: string): Observable<Tema[]> {
    throw new Error('Method not implemented.');
  }

  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  update(t: Tema): Observable<Tema | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Tema): Observable<Tema | null> {
    throw new Error('Method not implemented.');
  }
}
