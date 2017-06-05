import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsContainer } from './reviews.component';

const routes: Routes = [
  {
    path: '', component: ReviewsContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReviewsRoutingModule { }
