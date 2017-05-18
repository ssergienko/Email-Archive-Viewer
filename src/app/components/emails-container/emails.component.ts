import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

import { AppState } from '../../store/root.reducer';
import { EmailsActions } from './store/emails.actions';
import { EmailsList } from './emails-list/emails-list.component';
import { Email } from './email.model';

@Component({
  selector: 'emails',
  template: `
    <pagination-controls (pageChange)="pageChanged($event)" previousLabel="" nextLabel=""></pagination-controls>
    <input class="form-control search-by-subject" type="text" [value]="filterText" [placeholder]="filterPlaceholder" [formControl]="filterInput" />
    <!--<a (click)="filterByName()">Order by Name From</a> / <a (click)="filterByDate()">Order by Date</a>-->
    <emails-list
        [emails]="emails | async"
        [selectedEmail]="selectedEmails"
        (onSelect)="select($event)"
        [page]="page"
        [filterText]="filterText"
    ></emails-list>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./emails.component.css'],
  providers: [ EmailsList ]
})

export class Emails implements OnInit {
  public page: number = 5;
  public filterText: string;
  public filterPlaceholder: string;
  public filterInput = new FormControl();
  private emails: Observable<any>;
  public selectedEmail: Email;
  constructor (
    private emailsActions: EmailsActions,
    private store: Store<AppState>
  ) {
    this.emails = store.select('emails');
  }
  ngOnInit() {
    this.filterText = "";
    this.filterPlaceholder = "Search by subject...";
    this.filterInput
      .valueChanges
      .debounceTime(200)
      .subscribe(term => {
        this.filterText = term;
        console.log(term);
      });
  }
  select(email) {
    console.log(email);
    this.selectedEmail = email;
  }
  pageChanged(page) {
    this.page = page;
  }
}
