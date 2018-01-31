import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  constructor(private notificaSrv: NotificationService,
    private fb: FormBuilder
    ) {

  // constructor(private fb: FormBuilder) {
    // this.frmLogin = this.fb.group({
    //   'email': ['', Validators.email],
    //   'clave': ['', Validators.required]
    // });

    this.frmLogin = new FormGroup ({
      email: new FormControl(),
      clave: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    const frm = this.frmLogin.value;
    alert(frm.email + ' ' + frm.clave);
  }

  // mostrarInfo() {
  //   this.notificaSrv.show('info', 'mensaje de informacion');
  // }

  // mostrarError() {
  //   this.notificaSrv.show('error', 'mensaje de error');
  // }

}
