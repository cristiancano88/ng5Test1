import { VariableService } from './shared/variable.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterConfig } from './router.config';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification/notification.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClient } from 'selenium-webdriver/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UsuarioContenidoComponent } from './usuario/usuario-contenido/usuario-contenido.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    NotificationComponent,
    UsuarioComponent,
    SignupFormComponent,
    UsuarioContenidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificationService,
    UsuarioService,
    VariableService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
