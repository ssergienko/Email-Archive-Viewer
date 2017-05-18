import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'emails-list',
  template: require('./emails-list.component.html'),
  styles: [require('./emails-list.component.css')]
})
export class EmailsList {
  @Input() emails;
  @Input() selectedEmail;
  @Input() page;
  @Input() filterText;
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
