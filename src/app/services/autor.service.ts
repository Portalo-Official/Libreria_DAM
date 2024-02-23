import { Injectable } from '@angular/core';
import { Autor } from '../interfaces/libreria.interface';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { Observable } from 'rxjs';
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

    return this.http.get<Array<Autor>>('');
  }

  delete(k: string): Boolean {
    throw new Error('Method not implemented.');
  }

  getByID(k: string): Observable<Autor[]> {
    throw new Error('Method not implemented.');
  }

  update(t: Autor): Boolean {
    throw new Error('Method not implemented.');
  }

}
