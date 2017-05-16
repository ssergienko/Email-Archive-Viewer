import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Emails } from './emails.component';
import { EmailsList } from './emails-list/emails-list.component';
// import { EmailDetail } from './email-detail.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ Emails, EmailsList ],
  exports: [ Emails ],
  providers: []
})
export class EmailsModule {}
