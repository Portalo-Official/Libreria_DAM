import { Libro } from "./libreria.interface";

export interface ResponseLibro {
  OK:    string,
  Error: null;
  Data:  Libro | null | Boolean;
}

// export interface Data {
//   Id:       number;
//   ISBN:     string;
//   Titulo:   string;
//   Precio:   number;
//   Tema:     string;
//   Autor:    string;
//   Edicion:  string;
//   Formato:  string;
//   Cantidad: number;
//   URL:      string;
// }
