import { Component, OnInit, OnChanges } from '@angular/core';
import { Usuario } from '../usuario';
import { Input } from '@angular/core/src/metadata/directives';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';

@Component({
  selector: 'app-usuario-contenido',
  templateUrl: './usuario-contenido.component.html',
  styleUrls: ['./usuario-contenido.component.scss']
})
export class UsuarioContenidoComponent implements OnInit, OnChanges {
  @Input() usuario: Usuario;
  frmUsuario: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
