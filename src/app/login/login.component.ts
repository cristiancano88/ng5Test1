import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariableService } from '../shared/variable.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private variableSrv: VariableService
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
    this.variableSrv.bloggIn.next(true);
  }

  mostrarInfo() {
    this.notificaSrv.show('info', 'mensaje de informacion');
  }

  mostrarError() {
    this.notificaSrv.show('error', 'mensaje de error');
  }

}
