
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from "./components/principal/principal.component";
import { AddComponent } from "./components/add/add.component";
import { DataformComponent } from "./components/dataform/dataform.component";


import { IndexComponent } from "./components/usuarios/index.component";
import { NuevoComponent } from "./components/usuarios/nuevo.component";
import { EditarComponent } from "./components/usuarios/editar.component";

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'usuario', component: IndexComponent},
      { path: 'nuevo', component: NuevoComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: 'editar/:id', component: EditarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
// { path: 'usuario', component: IndexComponent, outlet: 'menuoutlet'}
export const app_routing = RouterModule.forRoot(app_routes, { useHash: false });
