import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard-dengue',
    pathMatch: 'full',
  },
  {
    path: 'dashboard-dengue',
    loadChildren: () => import('./dashboard-dengue/dashboard-dengue.routes'),
  },
];
