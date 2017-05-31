import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

import { EmailsContainer } from './emails.component';
import { EmailsList } from './emails-list';
import { EmailComponent } from './emails-list/email';

import { EmailsActions } from './store/emails.actions';
import { EmailService } from './emails.service';
import { EmailsEffects } from './store/emails.effects';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    EffectsModule.run(EmailsEffects)
  ],
  declarations: [
    EmailsContainer,
    EmailsList,
    SearchPipe,
    EmailComponent
  ],
  exports: [ EmailsContainer ],
  providers: [ EmailsActions, EmailService ]
})
export class EmailsModule {}
