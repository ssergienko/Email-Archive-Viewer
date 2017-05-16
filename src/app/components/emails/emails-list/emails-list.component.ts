import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'emails-list',
  template: require('./emails-list.component.html'),
  styles: [require('./emails-list.component.css')]
})
export class EmailsList {
  p: number = 5;
  @Input() emails;
  @Input() selectedEmail;
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() pageChange: EventEmitter<number>;
}
