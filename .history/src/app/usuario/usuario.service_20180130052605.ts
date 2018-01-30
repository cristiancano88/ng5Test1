import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get('api/Usuarios').toPromise()
  }

}
