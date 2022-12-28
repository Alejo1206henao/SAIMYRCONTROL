import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigImportComponent } from './config-import.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ConfigImportComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigImportRoutingModule { }

@NgModule({
  declarations: [
    ConfigImportComponent

  ],
  imports: [
    CommonModule,
    ConfigImportRoutingModule
  ]
})
export class ConfigImportModule { }


