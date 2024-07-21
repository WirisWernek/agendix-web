import { Routes } from "@angular/router";

export const PRESTADOR_ROUTES: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent),
	 },
	 {
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home',
	 },
]