import { Routes } from '@angular/router'

export const AUTH_ROUTES: Routes = [
   {
      path: 'login',
      loadComponent: () => import('./views/login/login.component').then((c) => c.LoginComponent),
   },
   {
      path: 'register',
      loadComponent: () => import('./views/register/register.component').then((c) => c.RegisterComponent),
   },
   {
      path: 'reset-password',
      loadComponent: () => import('./views/reset-password/reset-password.component').then((c) => c.ResetPasswordComponent),
   },
   {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'login',
   },
]
