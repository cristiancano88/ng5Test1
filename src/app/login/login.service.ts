import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Verificar } from './verificar';
import { VariableService } from '../shared/variable.service';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private variableSrv: VariableService,
    private router: Router,
    private notificationSrv: NotificationService
  ) { }

  verificaAcceso(email: string, clave: string) {
    this.http.get<Verificar>('assets/verificaUsuario.json?' + email + '/' + clave)
    .subscribe((d) => {
      if (d.existe) {
        this.variableSrv.bloggIn.next(true);
        this.router.navigate(['usuario']);
      } else {
        this.notificationSrv.show('error', 'correo o clave erroneos');
      }

      console.log(d);
    });
  }

}
