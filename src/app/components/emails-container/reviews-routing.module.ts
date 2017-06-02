import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailsContainer } from './emails.component';

const routes: Routes = [
  {
    path: '',
    component: EmailsContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReviewsRoutingModule { }
