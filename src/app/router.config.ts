import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
export const RouterConfig: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: HomeComponent},
  {path: 'registro', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"}, //pagina por defecto es home
  {path: '**', redirectTo: 'home'}, //si ingresan una url extraña, la app se redirige a la home
]
