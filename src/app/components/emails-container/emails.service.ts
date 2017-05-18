import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Email } from './email.model';

@Injectable()
export class EmailService {
    constructor (private http: Http) {}
    getEmails(): Observable<Email[]> {
        return this.http.request('./assets/emails.json').map(res => res.json());
    }
}
