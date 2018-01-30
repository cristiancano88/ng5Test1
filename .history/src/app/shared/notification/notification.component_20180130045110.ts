import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  mensaje: string = 'Bienvenido dal programa'
  tipo: string = 'info'
  constructor(private notificaSrv: NotificationService) { 
    this.notificaSrv.emiter.subscribe((d:any)=>{
      this.mensaje = d.mensaje;
      this.tipo = d.tipo;
    });
  }

  ngOnInit() {
  }

  borraMensaje() {
    setTimeout(() => {
      this.mensaje = null;
      this.tipo = null;
    }, 2000)
  }

}
