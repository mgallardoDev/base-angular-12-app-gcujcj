import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentCComponent } from './common/components/component-c/component-c.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentCComponent,
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./modules/module-a/module-a.module').then((m) => m.ModuleAModule),

  },
  {
    path: 'b',
    loadChildren: () =>
      import('./modules/module-b/module-b.module').then((m) => m.ModuleBModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
