import { Routes } from '@angular/router'

export const AUTH_ROUTES: Routes = [
   {
      path: 'login',
      loadComponent: () => import('./views/login/login.component').then((c) => c.LoginComponent),
   },

   {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'login',
   },
]
