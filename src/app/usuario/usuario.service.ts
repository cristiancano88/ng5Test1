import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario() {
    // return this.http.get('api/Usuarios').toPromise();
    return this.http.get('http://jsonplaceholder.typicode.com/users').toPromise();
  }

}
