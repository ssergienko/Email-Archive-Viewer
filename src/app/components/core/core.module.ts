import { CommonModule } from '@angular/common';
import {
         ModuleWithProviders,
         NgModule,
         Optional,
         SkipSelf } from '@angular/core';

import { HeaderModule } from './header';
import { FooterComponent } from './footer';
import { AuthModule } from './header/auth';

@NgModule({
  imports:      [ CommonModule, HeaderModule, AuthModule ],
  declarations: [ FooterComponent ],
  exports:      [ FooterComponent, HeaderModule, AuthModule ],
  providers:    [
    // @todo: auth service
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
