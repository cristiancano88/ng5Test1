import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioContenidoComponent } from './usuario-contenido.component';

describe('UsuarioContenidoComponent', () => {
  let component: UsuarioContenidoComponent;
  let fixture: ComponentFixture<UsuarioContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
