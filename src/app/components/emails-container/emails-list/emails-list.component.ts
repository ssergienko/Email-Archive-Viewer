import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsList {
  @Input() emails;
  @Input() selectedEmail;
  @Input() page;
  @Input() filterText;
  @Input() order;
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
