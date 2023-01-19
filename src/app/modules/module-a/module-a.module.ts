import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IDirectiveModuleConfig,
  LibraryModule,
  SERVICE_INYECTION_TOKEN,
} from '../../../../libs/library/library.module';
import { ModuleARoutingModuleModule } from './module-arouting-module.module';
import { ComponentAComponent } from './component-a/component-a.component';
import { ServiceAService } from './service-a.service';

const serviceConfig: IDirectiveModuleConfig = {
  serviceAdapterConfiguration: {
    provide: SERVICE_INYECTION_TOKEN,
    useClass: ServiceAService,
  },
};

@NgModule({
  imports: [
    LibraryModule.forRoot(serviceConfig),
    CommonModule,
    ModuleARoutingModuleModule,
  ],
  declarations: [ComponentAComponent],
  exports: [ComponentAComponent],
})
export class ModuleAModule {}
