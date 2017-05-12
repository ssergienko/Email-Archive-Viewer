import { Component, ViewEncapsulation } from '@angular/core';
import { EmailsService } from './emails.service';
//import { Observable } from '@rxjs/Observable';

@Component({
  selector: 'emails',
  template: `
    <div>123</div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./emails.component.css'],
  providers: [ EmailsService ]
})

export class EmailsComponent {
  private emails: any;
  constructor (private emailsService: EmailsService) {
    this.emails = emailsService.getEmails();
  }
}
