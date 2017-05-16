import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailsService {
  constructor(private http:Http) {}
  getEmails(): Observable<any> {
    return this.http.request('./emails.json').map(res => res.json());
  }
}
