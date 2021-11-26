import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponentComponent } from './frame1/banner-component/banner-component.component';
import { ModalComponent } from './home/modal/modal.component'
import { MovieCardComponent } from './home/movie-card/movie-card.component';
import { ButtonComponent } from './home/button/button.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { Frame1Component } from './frame1/frame1.component';
import { BlocksComponent } from './frame1/blocks/blocks.component';
import { FooterComponent } from './frame1/footer/footer.component';
import { Frame4Component } from './frame4/frame4.component';

@NgModule({
  declarations: [
    AppComponent,

    MovieCardComponent,
    ButtonComponent,
    HomeComponent,
    ModalComponent,
    UsuariosComponent,
    ConteudoComponent,
    Frame1Component,
    BannerComponentComponent,
    BlocksComponent,
    FooterComponent,
    Frame4Component

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
