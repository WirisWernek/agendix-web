import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.routes').then((r) => r.CLIENTE_ROUTES),
  },
  {
    path: 'prestador',
    loadChildren: () =>
      import('./prestador/prestador.routes').then((r) => r.PRESTADOR_ROUTES),
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./admin/admin.routes').then((r) => r.ADMIN_ROUTES),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
