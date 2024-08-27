import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

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
	component: LayoutComponent,
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
