import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GuardService } from './services/security/guard.service';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    //canActivate:[GuardService]
  },

  {
    path: 'configuracion',
        children: [
          {
            path: 'import',
            loadChildren: () =>
              import('./pages/configuration/config-import/config-import.module').then(
                (m) => m.ConfigImportModule
              ),
          },
          {
            path: 'import',
            loadChildren: () =>
              import('./pages/configuration/config-import/config-import.module').then(
                (m) => m.ConfigImportModule
              ),
          }
        ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
