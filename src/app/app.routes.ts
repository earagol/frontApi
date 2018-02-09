
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from "./components/principal/principal.component";
import { AddComponent } from "./components/add/add.component";
import { DataformComponent } from "./components/dataform/dataform.component";

const app_routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'home', component: PrincipalComponent },
  { path: 'dataform', component: DataformComponent },
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
