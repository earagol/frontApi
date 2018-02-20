import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { PrincipalComponent } from './components/principal/principal.component';

import { UsuarioService } from './services/usuario.service';
// import { AddComponent } from './components/add/add.component';
// import { DataformComponent } from './components/dataform/dataform.component';

//Usuarios
import { IndexComponent } from './components/usuarios/index.component';
import { NuevoComponent } from './components/usuarios/nuevo.component';
import { EditarComponent } from './components/usuarios/editar.component';
// import { ConfirmDirective } from './directivas/confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
