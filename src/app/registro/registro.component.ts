import { Usuario } from './../usuario/usuario';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  frmRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioSrv: UsuarioService,
    // private Usuario: Usuario
  ) {
    this.frmRegistro = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      clave: ['', Validators.required],
      confirmar: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  validacion() {
    const frm = this.frmRegistro.value;
    // if (frm.confirmar === frm.clave) {
    //   return true;
    // } else {
    //   return false;
    // }

    return (frm.confirmar === frm.clave);
  }

  registro() {
    const frm = this.frmRegistro.value;
    const objUsuario: Usuario = new Usuario();
    objUsuario.email = frm.email;
    objUsuario.name = frm.nombre;
    objUsuario.clave = frm.clave;

    this.usuarioSrv.grabar(objUsuario)
    .then();
  }

}
