import { Routes } from '@angular/router';
import { NotFound } from './component/not-found/not-found';
import { Login } from './component/login/login';
import { Layout } from './component/layout/layout';
import { guardGuard } from './guard/guard-guard';
import { Dashboard } from './component/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    canActivate: [guardGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
