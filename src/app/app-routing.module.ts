import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './components/home#HomeModule'
  },
  {
    path: 'reviews',
    loadChildren: './components/reviews#ReviewsModule'
  },
  {
    path: 'callback',
    loadChildren: './components/callback#CallbackModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
