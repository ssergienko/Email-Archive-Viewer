import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreDevToolsModule } from './components/store-devtools/store-devtools.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    StoreDevToolsModule
  ],
  declarations: [],
  exports: [ CommonModule, FormsModule ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // UsersService
      ]
    };
  }
}
