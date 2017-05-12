import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmailsService {
  constructor(private http:Http) {}
  getEmails() {
    return this.http.request('./emails.json').map(res => res.json());
  }
}
