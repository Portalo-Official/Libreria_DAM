import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { environmets } from '../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private baseURL: string = environmets.baseUrl;
  private endPoint: string = environmets.endPoint.temas;
  constructor( private http : HttpClient) { }

  public getAll(): Observable<Tema[]>{
    return this.http.get<Array<Tema>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

}
