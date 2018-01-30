import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  getUsuario() {
    return this.http.get('api/Usuarios').toPromise();
  }

}
