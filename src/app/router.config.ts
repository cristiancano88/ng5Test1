import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
export const RouterConfig: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: SignupFormComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // pagina por defecto es home
  {path: '**', redirectTo: 'home'}, // si ingresan una url extraña, la app se redirige a la home
];
