
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from "./components/principal/principal.component";
import { AddComponent } from "./components/add/add.component";
import { DataformComponent } from "./components/dataform/dataform.component";


import { IndexComponent } from "./components/usuarios/index.component";
import { NuevoComponent } from "./components/usuarios/nuevo.component";
import { EditarComponent } from "./components/usuarios/editar.component";

const app_routes: Routes = [
  { path: 'usuario', component: IndexComponent},
  { path: 'nuevo', component: NuevoComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'usuario' },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: false });
