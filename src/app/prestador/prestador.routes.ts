import { Routes } from '@angular/router'

export const PRESTADOR_ROUTES: Routes = [
   {
      path: 'home',
      loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent),
   },
   {
      path: 'links',
      loadComponent: () => import('./views/links/links.component').then((c) => c.LinksComponent),
   },
   {
      path: 'comunicacao',
      loadComponent: () => import('./views/comunicacao/comunicacao.component').then((c) => c.ComunicacaoComponent),
   },
   {
      path: 'clientes',
      loadComponent: () => import('./views/clientes/clientes.component').then((c) => c.ClientesComponent),
   },
   {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home',
   },
]
