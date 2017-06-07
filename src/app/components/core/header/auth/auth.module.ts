import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [CommonModule],
  providers: [AuthService],
  exports: [AuthComponent]
})

export class AuthModule {}
