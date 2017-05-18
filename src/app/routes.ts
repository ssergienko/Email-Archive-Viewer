// import {Routes} from '@ngrx/router';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Emails } from './components/emails-container/emails.component';

const routes: Routes = [
  {
    path: '',
    component: Emails
  }
];

// export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
