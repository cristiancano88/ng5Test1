import { Component, OnInit, OnChanges } from '@angular/core';
import { Usuario } from '../usuario';
import { Input } from '@angular/core/src/metadata/directives';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-usuario-contenido',
  templateUrl: './usuario-contenido.component.html',
  styleUrls: ['./usuario-contenido.component.scss']
})
export class UsuarioContenidoComponent implements OnInit, OnChanges {
  @Input() usuario: Usuario;
  frmUsuario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.frmUsuario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      clave: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.usuario === undefined) return;

    this.frmUsuario.setValue({
      nombre: this.usuario.name,
      email: this.usuario.email,
      clave: this.usuario.clave
    });
  }

}
