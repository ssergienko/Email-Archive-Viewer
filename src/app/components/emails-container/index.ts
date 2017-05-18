import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Emails } from './emails.component';
import { EmailsList } from './emails-list/emails-list.component';
// import { EmailDetail } from './email-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule ],
  declarations: [ Emails, EmailsList, SearchPipe ],
  exports: [ Emails ],
  providers: []
})
export class EmailsModule {}
