

export interface Libro {
  Id?:       number;
  ISBN:     string;
  Titulo:   string;
  Precio:   number;
  Tema:     string;
  Autor:    string;
  Edicion:  string;
  Formato:  string;
  Cantidad: number;
  URL:      string;
}

export interface Autor {
  Id?:     number;
  Nombre: string;
}

export interface Edicion {
  Id?:   number;
  Tipo: string;
}
export interface Tema {
  Id?:   number,
  Tipo: string,
}
export interface Formato {
  Id?:   number;
  Tipo: string;
}

