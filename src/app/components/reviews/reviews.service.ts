import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Review } from './reviews-list/review/review.model';

@Injectable()
export class ReviewService {
    constructor (private http: Http) {}
    getReviews(): Observable<Review[]> {
        return this.http.request('./assets/emails.json').map(res => res.json());
    }
}
