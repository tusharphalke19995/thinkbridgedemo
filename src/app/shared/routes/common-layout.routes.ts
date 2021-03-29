import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../components/components.component'

export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },

    //Apps
    // {
    //     path: 'apps',
    //     data: {
    //         title: 'Apps'
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/dashboard',
    //             pathMatch: 'full'
    //         }, 
    //         {
    //             path: '',
    //             loadChildren: () => import('../../apps/apps.module').then(m => m.AppsModule)
    //         },
    //     ]    
    // },

    // //Component
    // {
    //     path: 'demo',
    //     component: ComponentsComponent,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/components/affix',
    //             pathMatch: 'full'
    //         }, 
    //         {
    //             path: '',
    //             loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    //         }
    //     ],
    //     data: {
    //         title: 'Components '
    //     }
    // },

    // // Charts
    // {
    //     path: 'charts',
    //     data: {
    //         title: 'Charts'
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/dashboard',
    //             pathMatch: 'full'
    //         }, 
    //         {
    //             path: '',
    //             loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsModule)
    //         },
    //     ]    
    // },

    // //Pages
    // {
    //     path: 'pages',
    //     data: {
    //         title: 'Pages '
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: '/dashboard',
    //             pathMatch: 'full'
    //         }, 
    //         {
    //             path: '',
    //             loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
    //         },
    //     ]    
    // },
    
    {
        path: 'project-verification',
        data: {
            title: 'Project-Verification '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../postprojectverification/postprojectverification.module').then(m => m.PostprojectverificationModule)
            },
        ]    
    },

    {
        path: 'profile-verification',
        data: {
            title: 'Profile-Verification'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../profileverification/profileverification.module').then(m => m.ProfileverificationModule)
            },
        ]    
    },
    {
        path: 'members-plan',
        data: {
            title: 'Members Plan'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../members-plan/members-plan.module').then(m => m.MembersPlanModule)
            },
        ]    
    },
    {
        path: 'manager-faq',
        data: {
            title: 'Manager FAQ'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../manager-faq/manager-faq.module').then(m => m.ManagerFAQModule)
            },
        ]    
    },
    {
        path: 'manage-user',
        data: {
            title: 'Manage User'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../manage-user/manage-user.module').then(m => m.ManageUserModule)
            },
        ]    
    },
    {
        path: 'verification',
        data: {
            title: 'Verification'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../verification/verification.module').then(m => m.VerificationModule)
            },
        ]    
    }                                    
];