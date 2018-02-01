import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableService } from '../shared/variable.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms'; //

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  constructor(
    private notificaSrv: NotificationService,
    private fb: FormBuilder,
    private variableSrv: VariableService,
    private router: Router,
    private loginSrv: LoginService
    ) {
    this.frmLogin = this.fb.group({
      'email': ['', Validators.email],
      'clave': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const frm = this.frmLogin.value;
    this.loginSrv.verificaAcceso(frm.email, frm.clave);

    // this.variableSrv.bloggIn.next(true);
    // this.router.navigate(['usuario']);
  }

  mostrarInfo() {
    this.notificaSrv.show('info', 'mensaje de informacion');
  }

  mostrarError() {
    this.notificaSrv.show('error', 'mensaje de error');
  }

}
