import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Emails } from './emails.component';
import { EmailsList } from './emails-list/emails-list.component';
// import { EmailDetail } from './email-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [ CommonModule, NgxPaginationModule ],
  declarations: [ Emails, EmailsList ],
  exports: [ Emails ],
  providers: []
})
export class EmailsModule {}
