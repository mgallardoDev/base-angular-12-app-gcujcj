import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulBRoutingModuleModule } from './modul-brouting-module.module';
import { IDirectiveModuleConfig, LibraryModule, SERVICE_INYECTION_TOKEN } from '../../../../libs/library/library.module';
import { ComponentBComponent } from './component-b/component-b.component';
import { ServiceBService } from './service-b.service';

const serviceConfig: IDirectiveModuleConfig = {
  serviceAdapterConfiguration: {
    provide: SERVICE_INYECTION_TOKEN,
    useClass: ServiceBService,
  },
};

@NgModule({
  imports: [LibraryModule.forRoot(serviceConfig), CommonModule, ModulBRoutingModuleModule],
  declarations: [ComponentBComponent],
})
export class ModuleBModule {}
