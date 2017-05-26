import { Component, Input } from '@angular/core';

@Component({
  selector: 'email-component',
  template: `
    <div class="emails-element">
      <div class="from">
        <strong>From: </strong>{{emaildata.from}}
      </div>
      <div class="subject">
        <strong>Subject: </strong> {{emaildata.subject}}
      </div>
      <div class="date">
        <strong>Received at: </strong> {{emaildata.date}}
      </div>
      <div class="body">{{emaildata.body}}</div>
    </div>
  `
})

export class EmailComponent {
  @Input() emaildata: any;
}
