import { InjectionToken, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDirective } from './directive.directive';

export const SERVICE_INYECTION_TOKEN: InjectionToken<any> = new InjectionToken('service')

export interface IDirectiveModuleConfig {
  serviceAdapterConfiguration?: Provider;
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectiveDirective],
  exports: [DirectiveDirective]

})
export class LibraryModule { 

  public static forRoot(config: IDirectiveModuleConfig = {}): ModuleWithProviders<LibraryModule> {
    return {
        ngModule: LibraryModule,
        providers: [
            config.serviceAdapterConfiguration
        ]
    };
}
}