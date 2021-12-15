import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [

    {
        path: 'manage-inventory',
        data: {
            title: 'Manager inventory'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../manage-inventory/manage-inventory.module').then(m => m.ManagerFAQModule)
            },
        ]    
    },
   
                                
];