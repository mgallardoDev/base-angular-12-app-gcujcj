import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCComponent } from './components/component-c/component-c.component';


@NgModule({
  imports: [CommonModule],
  declarations: [ComponentCComponent],
  exports: [ComponentCComponent],
})
export class CommonModuleModule {}
