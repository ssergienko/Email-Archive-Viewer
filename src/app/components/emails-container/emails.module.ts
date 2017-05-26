import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailsContainer } from './emails.component';
import { EmailsList } from './emails-list/emails-list.component';
import { EmailComponent } from './emails-list/email/email.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule ],
  declarations: [ EmailsContainer, EmailsList, SearchPipe, EmailComponent ],
  exports: [ EmailsContainer ],
  providers: []
})
export class EmailsModule {}
