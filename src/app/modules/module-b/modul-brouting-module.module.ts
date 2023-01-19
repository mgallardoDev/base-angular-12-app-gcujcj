import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentBComponent } from './component-b/component-b.component';

const routes: Routes = [
  {path:'', component: ComponentBComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulBRoutingModuleModule { }