import { AuthModule } from './auth';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [AuthModule],
  providers: [],
  exports: [HeaderComponent]
})

export class HeaderModule {}
