import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/shared/home/home.component').then((m) => m.HomeComponent),
        title: 'Home Page',
        children: []

    },
    {
        path: 'auth',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then((m) => m.LoginComponent) }
        ]
    }
    
    
];
