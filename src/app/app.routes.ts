import {  Routes } from '@angular/router';
export const routes: Routes = [
        
        {
                path: '',
                pathMatch:"full",
                loadComponent: () => import('./home/home.component').then(
                        (m) => m.HomeComponent),
        },
        {
                path: 'home',
                loadComponent: () => import('./home/home.component').then(
                        (m) => m.HomeComponent),
        },
        {
                path: 'about',
                loadComponent: () => import('./about/about.component').then(
                        (m) => m.AboutComponent),
        },
        {
                path: 'dahabiaya',
                loadComponent: () => import('./dahabiaya/dahabiaya.component').then(
                        (m) => m.DahabiayaComponent),
        },
        {
                path: 'nile',
                loadComponent: () => import('./nile-cruise/nile-cruise.component').then(
                        (m) => m.NileCruiseComponent),
        },
        {
                path: '**',
                loadComponent: () =>
                        import('./not-found/notfound.component').then(
                                (m) => m.NotfoundComponent
                        ),
                title: 'Not Found',
        },

];

