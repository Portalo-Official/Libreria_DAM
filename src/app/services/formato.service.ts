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

  getAll() : Observable<Array<Formato>>{
    return this.http.get<Array<Formato>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  delete(k: string): Boolean{
    return true;
  }

  getByID(k : string): Observable<Array<Formato>>{
    return new Observable();
  }

  update(t : Formato): Boolean{
    return true;
  }
}
