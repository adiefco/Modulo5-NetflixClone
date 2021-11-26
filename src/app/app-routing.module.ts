import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Frame1Component } from './frame1/frame1.component';
import { Frame4Component } from './frame4/frame4.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: Frame1Component},
  {path: 'usuarios', component: Frame4Component, canActivate: [AuthGuard]},
  {path: 'conteudo', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
