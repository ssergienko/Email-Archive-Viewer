// import {Routes} from '@ngrx/router';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EmailsContainer } from './components/emails-container/emails.component';

const routes: Routes = [
  {
    path: '',
    component: EmailsContainer
  }
];

// export default routes;
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
