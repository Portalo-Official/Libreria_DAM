import { Observable } from 'rxjs';

/**
 * @generic T es la clase principal que se obtiene de las peticiones
 * @generic K es el tipo de dato por el que se identifique el genérico T
 */
export interface DaoLibreria<T, K>{
  // Array del generico T opcional
  list? : Array<T>;

  getAll(): Observable<Array<T>>;

  delete(k: K): Boolean;

  getByID(k : K): Observable<Array<T>>;

  update(t : T): Boolean;


}
