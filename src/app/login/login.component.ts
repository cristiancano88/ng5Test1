import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private notificaSrv: NotificationService) { }

  ngOnInit() {
  }

  mostrarInfo() {
    this.notificaSrv.show('info', 'mensaje de informacion');
  }

  mostrarError() {
    this.notificaSrv.show('error', 'mensaje de error');
  }

}
