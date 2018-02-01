import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { Usuario } from '../usuario';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-contenido',
  templateUrl: './usuario-contenido.component.html',
  styleUrls: ['./usuario-contenido.component.scss']
})
export class UsuarioContenidoComponent implements OnInit, OnChanges {
  @Input() usuario: Usuario;
  frmUsuario: FormGroup;
  constructor(private fb: FormBuilder,
  private usuarioSrv: UsuarioService) {
    this.frmUsuario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      clave: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.usuario === undefined) { return; }

    this.frmUsuario.setValue({
      nombre: this.usuario.name,
      email: this.usuario.email,
      clave: 123456
      // clave: this.usuario.clave
    });
  }

  borrar() {
    if (this.usuario === undefined) { return; }

    this.usuarioSrv.borrar(this.usuario.id)
    .subscribe();
  }

}
