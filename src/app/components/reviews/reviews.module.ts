import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

// import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

import { ReviewsContainer } from './reviews.component';
import { ReviewsList } from './reviews-list';
import { ReviewComponent } from './reviews-list/review';

import { ReviewsActions } from './store/reviews.actions';
import { ReviewService } from './reviews.service';
import { ReviewsEffects } from './store/reviews.effects';

import { ReviewsRoutingModule } from './reviews-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2OrderModule,
    EffectsModule.run(ReviewsEffects),
    ReviewsRoutingModule
  ],
  declarations: [
    ReviewsContainer,
    ReviewsList,
    SearchPipe,
    ReviewComponent
  ],
  exports: [ ReviewsContainer ],
  providers: [ ReviewsActions, ReviewService ]
})
export class ReviewsModule {}
